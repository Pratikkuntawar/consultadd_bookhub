import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Allbookrequest } from './allbookrequest';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

fdescribe('Allbookrequest Component', () => {
  let component: Allbookrequest;
  let fixture: ComponentFixture<Allbookrequest>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,Allbookrequest],
      // declarations: [Allbookrequest],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // for custom elements if any
    }).compileComponents();

    fixture = TestBed.createComponent(Allbookrequest);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);

    // Set token before ngOnInit runs
    localStorage.setItem('token', 'mock-token');
  });

  afterEach(() => {
    httpMock.verify(); // Ensures no outstanding requests
    localStorage.clear();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should fetch users on init', () => {
    const mockResponse = [
      {
        requester: {
          id: 1,
          fullName: 'Ram Kapoor',
          email: 'ram@example.com',
          department: 'CS',
          role: 'student'
        }
      }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('http://localhost:8080/api/book-requests/all');
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe('Bearer mock-token');
    req.flush(mockResponse);

    expect(component.users.length).toBe(1);
    expect(component.users[0].requester.fullName).toBe('Ram Kapoor');
  });

  it('should warn if no token found', () => {
    localStorage.removeItem('token');
    const warnSpy = spyOn(console, 'warn');

    component.ngOnInit();

    expect(warnSpy).toHaveBeenCalledWith('No token found. Please login first.');
  });

  it('should handle HTTP error', () => {
    const errorSpy = spyOn(console, 'error');

    component.ngOnInit();

    const req = httpMock.expectOne('http://localhost:8080/api/book-requests/all');
    req.flush('Error fetching', { status: 401, statusText: 'Unauthorized' });

    expect(errorSpy).toHaveBeenCalledWith('Failed to fetch employees:', jasmine.anything());
  });

});
