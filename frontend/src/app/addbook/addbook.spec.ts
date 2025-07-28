// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AddBook } from './addbook';

// describe('Addbook', () => {
//   let component: AddBook;
//   let fixture: ComponentFixture<AddBook>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AddBook]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(AddBook);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { AddBook } from './addbook';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

fdescribe('AddBook Component', () => {
  let component: AddBook;
  let fixture: ComponentFixture<AddBook>;
  let httpMock: HttpTestingController;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        AddBook,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have form controls initialized', () => {
    const form = component.bookForm;
    expect(form).toBeTruthy();
    expect(form.controls['title']).toBeDefined();
    expect(form.controls['author']).toBeDefined();
  });

  it('should show error when submitting invalid form', () => {
    spyOn(window, 'alert');
    component.bookForm.patchValue({ title: '', author: '' }); // invalid input
    component.onSubmit();
    expect(window.alert).not.toHaveBeenCalledWith('✅ Book added successfully!');
  });

  it('should send POST request on valid form submit', fakeAsync(() => {
    spyOn(window, 'alert');
    const mockResponse = { message: 'Book added' };
    const bookData = {
      title: 'Test Book',
      author: 'John Doe',
      description: '',
      bookType: 'NOVEL',
      department: 'LITERATURE',
      pdfUrl: '',
      imageUrl: '',
      price: 100
    };

    component.bookForm.setValue(bookData);
    localStorage.setItem('token', 'mock-token');

    const http = TestBed.inject(HttpTestingController);
    component.onSubmit();

    const req = http.expectOne('http://localhost:8080/consultadd/books/addbook');
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe('Bearer mock-token');
    req.flush(mockResponse);

    tick();
    expect(window.alert).toHaveBeenCalledWith('✅ Book added successfully!');
    http.verify();
    flush();
  }));

  it('should alert on HTTP error', fakeAsync(() => {
    spyOn(window, 'alert');
    const bookData = {
      title: 'Test Book',
      author: 'John Doe',
      description: '',
      bookType: 'NOVEL',
      department: 'LITERATURE',
      pdfUrl: '',
      imageUrl: '',
      price: 100
    };

    component.bookForm.setValue(bookData);
    localStorage.setItem('token', 'mock-token');

    const http = TestBed.inject(HttpTestingController);
    component.onSubmit();

    const req = http.expectOne('http://localhost:8080/consultadd/books/addbook');
    req.flush({ message: 'Error' }, { status: 500, statusText: 'Server Error' });

    tick();
    expect(window.alert).toHaveBeenCalledWith('❌ Failed to add book. Please try again.');
    http.verify();
    flush();
  }));

  it('should navigate to seller dashboard on handleClose()', () => {
    component.handleClose();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/seller-dashboard']);
  });
});
