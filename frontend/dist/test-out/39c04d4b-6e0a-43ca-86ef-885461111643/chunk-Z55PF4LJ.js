import {
  HrComponent,
  init_hr_component
} from "./chunk-7OMZB6IT.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-MP4QPDNY.js";
import {
  CommonModule,
  init_common
} from "./chunk-ARBLDS64.js";
import {
  Marketing,
  init_marketing
} from "./chunk-UUEXCKXL.js";
import {
  employeeService,
  init_employee_service
} from "./chunk-JDATXE54.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-KPYZTAT5.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/dashboard/dashboard.html
var dashboard_default;
var init_dashboard = __esm({
  "angular:jit:template:src/app/dashboard/dashboard.html"() {
    dashboard_default = `
<p class="h4 fw-lighter p-4">Welcome To {{department!='unknown' ? department : ''}} Dashbaord - Mr/Ms <label style="font-family: cursive;">{{employeeInfo.name}}. </label> </p>


<div *ngIf="department=='unknown'" class="row text-center">
   <h1 class="display-5 mt-5 p-5 "> Wait Till Hr Assign You Team .....</h1>
   <a href="https://www.consultadd.com/" target="_blank">Read about us ...</a>
</div>

<div class="container text-center">
   <app-hr-component></app-hr-component>
</div>

<div class="container ">
  <app-marketing></app-marketing>
</div>



 `;
  }
});

// angular:jit:style:src/app/dashboard/dashboard.css
var dashboard_default2;
var init_dashboard2 = __esm({
  "angular:jit:style:src/app/dashboard/dashboard.css"() {
    dashboard_default2 = "/* src/app/dashboard/dashboard.css */\n/*# sourceMappingURL=dashboard.css.map */\n";
  }
});

// src/app/dashboard/dashboard.ts
var Dashboard;
var init_dashboard3 = __esm({
  "src/app/dashboard/dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard();
    init_dashboard2();
    init_core();
    init_employee_service();
    init_ngx_cookie_service();
    init_common();
    init_hr_component();
    init_marketing();
    Dashboard = class Dashboard2 {
      employeeService;
      cookieService;
      employeeInfo;
      department = "unknown";
      constructor(employeeService2, cookieService) {
        this.employeeService = employeeService2;
        this.cookieService = cookieService;
      }
      ngOnInit() {
        this.getMyInfo();
      }
      getMyInfo() {
        this.employeeService.getMyInfo().subscribe({
          next: (res) => {
            this.employeeInfo = res;
            this.department = res.department ? res.department : "unknown";
            console.log("Employee loaded:", this.employeeInfo);
          },
          error: (err) => {
            console.error("Error while fetching employee data", err);
            this.department = "unknown";
          }
        });
      }
      static ctorParameters = () => [
        { type: employeeService },
        { type: CookieService }
      ];
    };
    Dashboard = __decorate([
      Component({
        selector: "app-dashboard",
        imports: [CommonModule, HrComponent, Marketing],
        template: dashboard_default,
        styles: [dashboard_default2]
      })
    ], Dashboard);
  }
});

export {
  Dashboard,
  init_dashboard3 as init_dashboard
};
//# sourceMappingURL=chunk-Z55PF4LJ.js.map
