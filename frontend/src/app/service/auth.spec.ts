import { TestBed } from '@angular/core/testing';
import { Auth } from './auth'; // update the path as needed
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeModel } from '../models/Employee';

describe('Auth Service', () => {
  let service: Auth;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Auth]
    });

    service = TestBed.inject(Auth);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensures no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call login API with POST method', () => {
    const loginData = { email: 'test@example.com', password: 'password123' };

    service.login(loginData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne("http://localhost:8080/auth/employeeLogin");
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(loginData);
    req.flush({ success: true }); // mock response
  });

  it('should call register API with POST method', () => {
    const employeeData: any = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      password: 'secure123'
    };

    service.register(employeeData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne("http://localhost:8080/auth/register");
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(employeeData);
    req.flush({ success: true }); // mock response
  });
});
