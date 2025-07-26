import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Requestbook } from './requestbook';

describe('Requestbook', () => {
  let component: Requestbook;
  let fixture: ComponentFixture<Requestbook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Requestbook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Requestbook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
