// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AdminDashboard } from './admin-dashboard';

// describe('AdminDashboard', () => {
//   let component: AdminDashboard;
//   let fixture: ComponentFixture<AdminDashboard>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AdminDashboard]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(AdminDashboard);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminDashboard } from './admin-dashboard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import Swal, { SweetAlertResult } from 'sweetalert2';




fdescribe('AdminDashboard', () => {
  let component: AdminDashboard;
  let fixture: ComponentFixture<AdminDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AdminDashboard,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu', () => {
    expect(component.isMenuOpen).toBeFalse();
    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();
  });

  it('should remove tokens and navigate on logout with Swal', async () => {
    spyOn(localStorage, 'removeItem');
    const routerSpy = spyOn(component['router'], 'navigate');

    // 🔁 Mock Swal.fire to return a resolved promise
    //spyOn(Swal, 'fire').and.returnValue(Promise.resolve());
spyOn(Swal, 'fire').and.returnValue(Promise.resolve({} as SweetAlertResult<any>));
    // 🔁 Call the logout method
    await component.onLogout();

    expect(Swal.fire).toHaveBeenCalled();
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(localStorage.removeItem).toHaveBeenCalledWith('role');
    expect(localStorage.removeItem).toHaveBeenCalledWith('employeeId');
    expect(routerSpy).toHaveBeenCalledWith(['/']);
  });
});


