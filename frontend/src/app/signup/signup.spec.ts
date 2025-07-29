
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

  //  Trigger the method
  await component.registerUser();// replace with your actual method name

  //  Assert Swal was called
  expect(swalSpy).toHaveBeenCalled();

  // Optional: check follow-up behavior
  // expect(someOtherSpy).toHaveBeenCalled(); or expect(component.flag).toBeTrue();
});

});
