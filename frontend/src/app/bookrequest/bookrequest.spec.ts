import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRequest } from './bookrequest';

describe('Bookrequest', () => {
  let component: BookRequest;
  let fixture: ComponentFixture<BookRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
