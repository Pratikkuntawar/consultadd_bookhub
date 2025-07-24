import {
  HrComponent,
  init_hr_component
} from "./chunk-AVDN2VJZ.js";
import "./chunk-6AINCUII.js";
import {
  employeeService,
  init_employee_service
} from "./chunk-S7SAHJ7C.js";
import {
  Marketing,
  init_marketing
} from "./chunk-JL7FZQC7.js";
import "./chunk-MSDT2LP6.js";
import "./chunk-V7YBN5IV.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-JFTBSIV3.js";
import "./chunk-ZGEDRP2A.js";
import {
  CommonModule,
  init_common
} from "./chunk-YC3NWMHE.js";
import "./chunk-56AEGESF.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  throwError,
  waitForAsync
} from "./chunk-7KP2XXLP.js";
import "./chunk-V6FC2DIM.js";

// src/app/dashboard/dashboard.spec.ts
init_tslib_es6();
init_testing();

// src/app/dashboard/dashboard.ts
init_tslib_es6();

// angular:jit:template:src/app/dashboard/dashboard.html
var dashboard_default = `
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

// angular:jit:style:src/app/dashboard/dashboard.css
var dashboard_default2 = "/* src/app/dashboard/dashboard.css */\n/*# sourceMappingURL=dashboard.css.map */\n";

// src/app/dashboard/dashboard.ts
init_core();
init_employee_service();
init_ngx_cookie_service();
init_common();
init_hr_component();
init_marketing();
var Dashboard = class Dashboard2 {
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

// src/app/dashboard/dashboard.spec.ts
init_employee_service();
init_ngx_cookie_service();
init_esm();
init_core();
var MockHrComponent = class MockHrComponent2 {
};
MockHrComponent = __decorate([
  Component({ selector: "app-hr-component", template: "" })
], MockHrComponent);
var MockMarketingComponent = class MockMarketingComponent2 {
};
MockMarketingComponent = __decorate([
  Component({ selector: "app-marketing", template: "" })
], MockMarketingComponent);
var MockEmployeeService = class {
  getMyInfo() {
    return of({
      name: "John Doe",
      department: "Engineering"
    });
  }
};
describe("Dashboard", () => {
  let component;
  let fixture;
  let mockEmployeeService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Dashboard, MockHrComponent, MockMarketingComponent],
      providers: [
        { provide: employeeService, useClass: MockEmployeeService },
        CookieService
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    mockEmployeeService = TestBed.inject(employeeService);
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should load employee info on init", () => {
    expect(component.employeeInfo.name).toBe("John Doe");
    expect(component.department).toBe("Engineering");
  });
  it("should set department to unknown on error", () => {
    spyOn(mockEmployeeService, "getMyInfo").and.returnValue(throwError(() => new Error("Failed")));
    component.getMyInfo();
    expect(component.department).toBe("unknown");
  });
});
//# sourceMappingURL=spec-app-dashboard-dashboard.spec.js.map
