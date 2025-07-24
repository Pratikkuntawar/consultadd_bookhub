import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HrService } from './hr';

describe('HrService', () => {
  let service: HrService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [
        HrService,
         
      ]
    });

    service = TestBed.inject(HrService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensure no pending requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getNewEmployee API with GET method', () => {
    const mockResponse: any = [
      {
        id: 1,
        name: 'Chetan Padhen',
        email: 'chetan@consultadd.com',
        contactNo: '8010793506',
      }
    ];

    service.getNewEmployee().subscribe(data => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/hr/getEmployeesWithoutDepartment');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
