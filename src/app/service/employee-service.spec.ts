import { TestBed } from '@angular/core/testing';
import { employeeService } from './employee-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('employeeService', () => {
  let service: employeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // deprecated module usage
      providers: [employeeService],
    });

    service = TestBed.inject(employeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getMyInfo API with GET method', () => {
    const mockResponse = {
      id: 1,
      name: 'Chetan Padhen',
      email: 'chetan@consultadd.com',
      contactNo: '8010793506',
      department: 'HR',
      role: 'admin',
      password:"1234"
    };

    service.getMyInfo().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/employee/getMyInfo');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
