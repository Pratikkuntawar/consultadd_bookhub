import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchbyid } from './searchbyid';

describe('Searchbyid', () => {
  let component: Searchbyid;
  let fixture: ComponentFixture<Searchbyid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searchbyid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searchbyid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
