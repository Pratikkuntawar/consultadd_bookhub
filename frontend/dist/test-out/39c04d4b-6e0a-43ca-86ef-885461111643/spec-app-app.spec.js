import {
  FormsModule,
  init_forms
} from "./chunk-ZYOBGB3U.js";
import {
  Router,
  RouterLink,
  RouterOutlet,
  init_router
} from "./chunk-M7CVYDXO.js";
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
import "./chunk-IOJ5AGST.js";
import "./chunk-OI3I74CY.js";
import {
  Component,
  Injectable,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  signal
} from "./chunk-KPYZTAT5.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src/app/app.html"() {
    app_default = `
<main class="p-2 d-flex justify-content-between">
 <div>
    <img src="/consultAdd.svg" class="" alt=""> 
 </div >

<div *ngIf="!isUserLoggedIn()" class="mx-2 gap-3 d-flex">
  <button class="btn btn-outline-primary flex-grow-1 px-3" [routerLink]="['/login']">
    Login
  </button>
  <button class="btn btn-outline-success flex-grow-1 px-3" [routerLink]="['/signup']">
    SignUp
  </button>     
</div>

<div *ngIf="isUserLoggedIn()" class="mx-2 gap-3 d-flex">
  <button (click)="logout()" class="btn btn-outline-danger flex-grow-1 px-3">
    Logout
  </button>
</div>


</main>


<router-outlet />
`;
  }
});

// angular:jit:style:src/app/app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src/app/app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/validators/AuthStatusService.ts
var AuthStatusService;
var init_AuthStatusService = __esm({
  "src/app/validators/AuthStatusService.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_ngx_cookie_service();
    AuthStatusService = class AuthStatusService2 {
      cookieService;
      constructor(cookieService) {
        this.cookieService = cookieService;
      }
      isLoggedIn() {
        const token = this.cookieService.get("token");
        return !!token;
      }
      static ctorParameters = () => [
        { type: CookieService }
      ];
    };
    AuthStatusService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], AuthStatusService);
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_forms();
    init_router();
    init_employee_service();
    init_ngx_cookie_service();
    init_AuthStatusService();
    init_common();
    App = class App2 {
      router;
      authStatus;
      employeeService;
      cookieService;
      constructor(router, authStatus, employeeService2, cookieService) {
        this.router = router;
        this.authStatus = authStatus;
        this.employeeService = employeeService2;
        this.cookieService = cookieService;
      }
      ngOnInit() {
      }
      title = signal("my-app");
      isUserLoggedIn() {
        return this.authStatus.isLoggedIn();
      }
      logout() {
        this.cookieService.delete("token");
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: Router },
        { type: AuthStatusService },
        { type: employeeService },
        { type: CookieService }
      ];
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, my-app");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app-app.spec.js.map
