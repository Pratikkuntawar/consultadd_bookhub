// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SignupComponent } from './signup';

// fdescribe('Signup', () => {
//   let component: SignupComponent;
//   let fixture: ComponentFixture<SignupComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [SignupComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(SignupComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { SignupComponent } from './signup';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule } from '@angular/forms';

// fdescribe('SignupComponent', () => {
//   let component: SignupComponent;
//   let fixture: ComponentFixture<SignupComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         SignupComponent,          // ✅ Add standalone component to imports///standalone components must be imported here
//         HttpClientTestingModule,  // ✅ Provide HttpClient mock
//         RouterTestingModule,      // ✅ Provide Router mock
//         FormsModule               // ✅ Required for ngModel binding
//       ]
//       // ❌ Do NOT put standalone components in declarations!
//     }).compileComponents();

//     fixture = TestBed.createComponent(SignupComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
// import { SignupComponent } from './signup';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule } from '@angular/forms';
// import { Location } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({ template: '' })
// class DummyComponent {}

// fdescribe('SignupComponent', () => {
//   let component: SignupComponent;
//   let fixture: ComponentFixture<SignupComponent>;
//   let httpMock: HttpTestingController;
//   let router: Router;
//   let location: Location;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         SignupComponent,             // ✅ standalone component
//         HttpClientTestingModule,     // mock HttpClient
//         RouterTestingModule.withRoutes([
//           { path: '', component: DummyComponent },
//           { path: 'login', component: DummyComponent }
//         ]),
//         FormsModule                  // ✅ ngModel binding
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(SignupComponent);
//     component = fixture.componentInstance;
//     router = TestBed.inject(Router);
//     location = TestBed.inject(Location);
//     httpMock = TestBed.inject(HttpTestingController);
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     httpMock.verify(); // ensure no HTTP calls left open
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should navigate to "/" on handleClose()', fakeAsync(() => {
//     component.handleClose();
//     tick();
//     expect(location.path()).toBe('/');
//   }));

//   it('should navigate to /login when moveToLoginRoute is called', fakeAsync(() => {
//     const routerSpy = spyOn(router, 'navigate');
//     component.moveToLoginRoute();
//     tick();
//     expect(routerSpy).toHaveBeenCalledWith(['/login']);
//   }));

//   it('should send signup data and navigate to /login on success', fakeAsync(() => {
//     const routerSpy = spyOn(router, 'navigate');
//     spyOn(window, 'alert'); // to prevent real alert popup

//     component.signupData = {
//       fullName: 'Test User',
//       email: 'use@consultadd.com',
//       password: 'password123',
//       role: 'ADMIN',
//       department: 'HR'
//     };

//     component.registerUser();

//     const req = httpMock.expectOne('http://localhost:8080/consultadd/auth/register');
//     expect(req.request.method).toBe('POST');
//     expect(req.request.body).toEqual(component.signupData);

//     req.flush({ message: 'Success' }); // simulate success
//     tick();

//     expect(window.alert).toHaveBeenCalledWith('Registered successfully!');
//     expect(routerSpy).toHaveBeenCalledWith(['/login']);
//   }));

//   it('should show alert on registration error', fakeAsync(() => {
//     spyOn(window, 'alert');

//     component.registerUser();

//     const req = httpMock.expectOne('http://localhost:8080/consultadd/auth/register');
//     req.flush({ message: 'Error' }, { status: 400, statusText: 'Bad Request' });
//     tick();

//     expect(window.alert).toHaveBeenCalledWith('Registration failed. Please try again.');
//   }));
// });
import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { SignupComponent } from './signup';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({ template: '' })
class DummyComponent {}

fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let httpMock: HttpTestingController;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SignupComponent,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '', component: DummyComponent },
          { path: 'login', component: DummyComponent }
        ]),
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/" on handleClose()', fakeAsync(() => {
    component.handleClose();
    tick();
    expect(location.path()).toBe('/');
  }));

  it('should navigate to /login when moveToLoginRoute is called', fakeAsync(() => {
    const routerSpy = spyOn(router, 'navigate');
    component.moveToLoginRoute();
    tick();
    expect(routerSpy).toHaveBeenCalledWith(['/login']);
  }));

  it('should register user and navigate to /login after Swal closes', fakeAsync(() => {
    const routerSpy = spyOn(router, 'navigate');
    component.signupData = {
      fullName: 'Test User',
      email: 'test@consultadd.com',
      password: 'pass1234',
      role: 'ADMIN',
      department: 'HR'
    };

    //const swalSpy = spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: true }));

    component.registerUser();

    const req = httpMock.expectOne('http://localhost:8080/consultadd/auth/register');
    req.flush({ message: 'Registered' });

    tick(2000); // simulate Swal auto-close timer
    fixture.whenStable().then(() => {
      //expect(swalSpy).toHaveBeenCalled();
      expect(routerSpy).toHaveBeenCalledWith(['/login']);
    });

    flush(); // flush pending timers
  }));

it('should call Swal.fire and handle confirmation', async () => {
  const swalSpy = spyOn(Swal, 'fire').and.returnValue(Promise.resolve({
    isConfirmed: true,
    isDenied: false,
    isDismissed: false,
    value: true
  } as SweetAlertResult<unknown>));

  // ✅ Trigger the method
  await component.registerUser();// replace with your actual method name

  // ✅ Assert Swal was called
  expect(swalSpy).toHaveBeenCalled();

  // ✅ Optional: check follow-up behavior
  // expect(someOtherSpy).toHaveBeenCalled(); or expect(component.flag).toBeTrue();
});

});
