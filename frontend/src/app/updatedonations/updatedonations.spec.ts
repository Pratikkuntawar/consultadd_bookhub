import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatedonations } from './updatedonations';

describe('Updatedonations', () => {
  let component: Updatedonations;
  let fixture: ComponentFixture<Updatedonations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatedonations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatedonations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
