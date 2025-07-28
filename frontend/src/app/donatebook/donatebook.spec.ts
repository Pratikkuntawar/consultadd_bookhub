import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateBook } from './donatebook';

describe('Donatebook', () => {
  let component: DonateBook;
  let fixture: ComponentFixture<DonateBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
