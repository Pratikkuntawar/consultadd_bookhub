// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login';

// describe('Login', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [LoginComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpMock: HttpTestingController;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        FormsModule,
        CommonModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should login and navigate to seller dashboard', fakeAsync(() => {
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({} as SweetAlertResult));
    component.loginData = { email: 'seller@example.com', password: '123456' };
    component.onSubmit();

    const req = httpMock.expectOne('http://localhost:8080/consultadd/auth/login');
    expect(req.request.method).toBe('POST');
    req.flush({
      token: 'mockToken',
      role: 'SELLER',
      employeeId: 'S001'
    });

    tick(); // Wait for Swal.then()
    expect(localStorage.getItem('token')).toBe('mockToken');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/seller-dashboard']);
  }));

  it('should navigate to buyer dashboard', fakeAsync(() => {
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({} as SweetAlertResult));
    component.loginData = { email: 'buyer@example.com', password: 'buyerpass' };
    component.onSubmit();

    const req = httpMock.expectOne('http://localhost:8080/consultadd/auth/login');
    req.flush({
      token: 'buyerToken',
      role: 'BUYER',
      employeeId: 'B001'
    });

    tick();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/buyer-dashboard']);
  }));

  it('should navigate to admin dashboard', fakeAsync(() => {
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({} as SweetAlertResult));
    component.loginData = { email: 'admin@example.com', password: 'adminpass' };
    component.onSubmit();

    const req = httpMock.expectOne('http://localhost:8080/consultadd/auth/login');
    req.flush({
      token: 'adminToken',
      role: 'ADMIN',
      employeeId: 'A001'
    });

    tick();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/admin-dashboard']);
  }));

  it('should show alert and navigate to root for unknown role', fakeAsync(() => {
    spyOn(window, 'alert');
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({} as SweetAlertResult));

    component.loginData = { email: 'guest@example.com', password: 'guestpass' };
    component.onSubmit();

    const req = httpMock.expectOne('http://localhost:8080/consultadd/auth/login');
    req.flush({
      token: 'guestToken',
      role: 'GUEST',
      employeeId: 'G001'
    });

    tick();
    expect(window.alert).toHaveBeenCalledWith('Unknown role');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  }));

  //it('should show Swal error popup on login failure', fakeAsync(() => {
  //   const swalSpy = spyOn(Swal, 'fire').and.returnValue(Promise.resolve({} as SweetAlertResult));

  //   component.loginData = { email: 'fail@example.com', password: 'wrong' };
  //   component.onSubmit();

  //   const req = httpMock.expectOne('http://localhost:8080/consultadd/auth/login');
  //   req.flush({ message: 'Unauthorized' }, { status: 401, statusText: 'Unauthorized' });

  //   tick();
  //   expect(swalSpy).toHaveBeenCalledWith({
  //     icon: 'error',
  //     title: 'Login Failed',
  //     text: 'Please check your credentials and try again.',
  //     timer: 2000,
  //     showConfirmButton: false,
  //     timerProgressBar: true
  //   });
  // }));
  it('should show SweetAlert with correct message on login failure', () => {
  spyOn(component['http'], 'post').and.returnValue({
    subscribe: ({ error }: any) => error({ status: 401 })
  } as any);

  const swalSpy = spyOn(Swal, 'fire').and.returnValue(Promise.resolve({} as SweetAlertResult<any>));

  component.onSubmit();

  expect(swalSpy).toHaveBeenCalledWith(jasmine.objectContaining({
    icon: 'error',
    title: 'Login Failed',
    text: 'Please check your credentials and try again.',
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true
  }));
});

});
