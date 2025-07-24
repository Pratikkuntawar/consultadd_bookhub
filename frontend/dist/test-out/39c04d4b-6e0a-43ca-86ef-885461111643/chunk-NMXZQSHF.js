import {
  ToastrService,
  init_ngx_toastr
} from "./chunk-EXYQI6JZ.js";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  init_forms
} from "./chunk-ZYOBGB3U.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-MP4QPDNY.js";
import {
  CommonModule,
  init_common
} from "./chunk-ARBLDS64.js";
import {
  employeeService,
  init_employee_service
} from "./chunk-JDATXE54.js";
import {
  HrService,
  init_hr
} from "./chunk-RKAV3GDG.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-KPYZTAT5.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/Hr/hr-component/hr-component.html
var hr_component_default;
var init_hr_component = __esm({
  "angular:jit:template:src/app/Hr/hr-component/hr-component.html"() {
    hr_component_default = '<div class="row row-cols-4">\n  <div class="col" *ngFor="let item of newEmployee">\n    <div class="card" style="width: 18rem;">\n      <div class="card-body">\n        <h5 class="card-title mt-2">{{ item.name }}</h5>\n        <h6 class="card-subtitle mb-2 text-body-secondary">+91-{{ item.contactNo }}</h6>\n        <h6 class="card-subtitle mb-2 text-body-secondary">{{ item.email }}</h6>\n        <div class="d-flex gap-3 p-3">\n          <select #roleRef class="form-select">\n            <option value="User">User</option>\n            <option value="Admin">Admin</option>\n          </select>\n          <select #deptRef class="form-select">\n            <option value="Engineering">Engineering</option>\n            <option value="Marketing">Marketing</option>\n            <option value="HR">HR</option>\n          </select>\n        </div>\n\n        <div class="d-flex gap-3 mt-3">\n          <button type="button" class="btn btn-primary" (click)="addNewEmployee(item, roleRef.value, deptRef.value)">Add Employee</button>\n          <button type="button" class="btn btn-danger" (click)="reject(item)">Reject</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/Hr/hr-component/hr-component.css
var hr_component_default2;
var init_hr_component2 = __esm({
  "angular:jit:style:src/app/Hr/hr-component/hr-component.css"() {
    hr_component_default2 = "/* src/app/Hr/hr-component/hr-component.css */\n/*# sourceMappingURL=hr-component.css.map */\n";
  }
});

// src/app/Hr/hr-component/hr-component.ts
var HrComponent;
var init_hr_component3 = __esm({
  "src/app/Hr/hr-component/hr-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_hr_component();
    init_hr_component2();
    init_core();
    init_hr();
    init_ngx_cookie_service();
    init_common();
    init_forms();
    init_employee_service();
    init_ngx_toastr();
    HrComponent = class HrComponent2 {
      toasterService;
      hrService;
      employeeService;
      cookieService;
      newEmployee;
      department = "unknown";
      newEmployeeCount;
      newEmpForm = new FormGroup({
        role: new FormControl(),
        department: new FormControl(),
        employeeObj: new FormControl()
      });
      constructor(toasterService, hrService, employeeService2, cookieService) {
        this.toasterService = toasterService;
        this.hrService = hrService;
        this.employeeService = employeeService2;
        this.cookieService = cookieService;
      }
      ngOnInit() {
        this.getNewEmployee();
        this.isHr();
      }
      isHr() {
        return this.department == "HR";
      }
      getNewEmployee() {
        this.hrService.getNewEmployee().subscribe({
          next: (res) => {
            this.newEmployee = res.data;
            this.newEmployeeCount = res.count;
            console.log("Employee count is ", this.newEmployeeCount);
            console.log("Employee count is ", this.newEmployee);
          },
          error: (err) => {
            console.error("Error fetching new employee data", err);
          }
        });
      }
      addNewEmployee(employee, role, department) {
        employee.department = department;
        employee.role = role;
        this.hrService.addNewEmployee(employee).subscribe({
          next: (res) => {
            console.log(employee);
            this.toasterService.success("Employee Added Succeesfully", "Success");
            this.newEmployee = this.newEmployee.filter((e) => e.email !== employee.email);
            console.log(res);
          },
          error: (err) => {
            this.toasterService.error("Something Wents Wrong ", "Failed");
          }
        });
      }
      reject(employee) {
        this.hrService.deleteNewEmployee(employee).subscribe({
          next: (res) => {
            console.log("User delete sucessfully");
            this.toasterService.error("Employee Removed sucessfully");
            this.newEmployee = this.newEmployee.filter((e) => e.email !== employee.email);
          },
          error: (err) => {
            this.toasterService.error("Something Wents Wrong ", "Failed");
          }
        });
      }
      static ctorParameters = () => [
        { type: ToastrService },
        { type: HrService },
        { type: employeeService },
        { type: CookieService }
      ];
    };
    HrComponent = __decorate([
      Component({
        selector: "app-hr-component",
        imports: [CommonModule, ReactiveFormsModule],
        template: hr_component_default,
        styles: [hr_component_default2]
      })
    ], HrComponent);
  }
});

export {
  HrComponent,
  init_hr_component3 as init_hr_component
};
//# sourceMappingURL=chunk-NMXZQSHF.js.map
