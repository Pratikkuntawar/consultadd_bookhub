import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Dashboard } from './dashboard';
import { employeeService } from '../service/employee-service';
import { CookieService } from 'ngx-cookie-service';
import { of, throwError } from 'rxjs';
import { Component } from '@angular/core';

// Mock HR and Marketing Components
@Component({selector: 'app-hr-component', template: ''})
class MockHrComponent {}

@Component({selector: 'app-marketing', template: ''})
class MockMarketingComponent {}

// Mock EmployeeService
class MockEmployeeService {
  getMyInfo() {
    return of({
      name: 'John Doe',
      department: 'Engineering'
    });
  }
}

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;
  let mockEmployeeService: MockEmployeeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Dashboard, MockHrComponent, MockMarketingComponent],
      providers: [
        { provide: employeeService, useClass: MockEmployeeService },
        CookieService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    mockEmployeeService = TestBed.inject(employeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load employee info on init', () => {
    expect(component.employeeInfo.name).toBe('John Doe');
    expect(component.department).toBe('Engineering');
  });

  it('should set department to unknown on error', () => {
    // Override getMyInfo to simulate error
    spyOn(mockEmployeeService, 'getMyInfo').and.returnValue(throwError(() => new Error('Failed')));
    component.getMyInfo();
    expect(component.department).toBe('unknown');
  });
});
