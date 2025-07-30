import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AllBooks } from './all-books';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

describe('SignupComponent', () => {
  let component: AllBooks;
  let fixture: ComponentFixture<AllBooks>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllBooks],
      imports: [HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AllBooks);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
