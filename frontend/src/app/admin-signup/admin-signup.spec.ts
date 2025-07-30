

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSignup } from './admin-signup';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

fdescribe('AdminSignup', () => {
  let component: AdminSignup;
  let fixture: ComponentFixture<AdminSignup>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        AdminSignup,              // Standalone component
        HttpClientTestingModule,  //  For HttpClient
        FormsModule               //  Required since component imports it
      ],
      providers: [
        { provide: Router, useValue: mockRouter } //  Mocked Router
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call registerUser and navigate on successful registration', () => {
    spyOn(component['http'], 'post').and.callFake(() => {
      return {
        subscribe: ({ next }: any) => next({ message: 'Success' })
      } as any;
    });

    component.signupData = {
      fullName: 'John Doe',
      email: 'john@consultadd.com',
      password: 'password',
      role: 'ADMIN',
      department: 'HR'
    };

    component.registerUser();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/admin-dashboard']);
  });
});
