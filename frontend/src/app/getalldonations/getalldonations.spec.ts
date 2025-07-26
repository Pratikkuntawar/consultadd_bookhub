import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getalldonations } from './getalldonations';

describe('Getalldonations', () => {
  let component: Getalldonations;
  let fixture: ComponentFixture<Getalldonations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getalldonations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getalldonations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
