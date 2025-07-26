import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allbookrequest } from './allbookrequest';

describe('Allbookrequest', () => {
  let component: Allbookrequest;
  let fixture: ComponentFixture<Allbookrequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allbookrequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allbookrequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
