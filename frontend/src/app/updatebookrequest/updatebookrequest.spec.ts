import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatebookrequest } from './updatebookrequest';

describe('Updatebookrequest', () => {
  let component: Updatebookrequest;
  let fixture: ComponentFixture<Updatebookrequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatebookrequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatebookrequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
