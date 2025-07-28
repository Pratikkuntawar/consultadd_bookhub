import {
  init_testing as init_testing2,
  provideLocationMocks
} from "./chunk-5FL7SN5G.js";
import {
  HttpClientTestingModule,
  init_testing as init_testing3
} from "./chunk-ICH2TFAM.js";
import {
  require_sweetalert2_all
} from "./chunk-M22DLADB.js";
import {
  NoPreloading,
  ROUTER_CONFIGURATION,
  ROUTER_PROVIDERS,
  ROUTES,
  Router,
  RouterModule,
  RouterOutlet,
  afterNextNavigation,
  init_router,
  init_router2,
  init_router_module,
  withPreloading
} from "./chunk-RFIBSTQU.js";
import "./chunk-FTANEXIX.js";
import "./chunk-2LDFVMMC.js";
import {
  FormsModule,
  init_forms
} from "./chunk-NU76FOGX.js";
import {
  CommonModule,
  init_common
} from "./chunk-3SPZE3GT.js";
import {
  HttpClient,
  HttpClientModule,
  init_http
} from "./chunk-FWZLS6EV.js";
import "./chunk-BYESBSSC.js";
import {
  Component,
  FactoryTarget,
  Injectable,
  NgModule,
  TestBed,
  ViewChild,
  __decorate,
  core_exports,
  init_core,
  init_testing,
  init_tslib_es6,
  signal,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-NB5YZKJW.js";
import {
  __async,
  __commonJS,
  __esm,
  __toESM
} from "./chunk-6TRXNEZQ.js";

// node_modules/@angular/router/fesm2022/testing.mjs
var RouterTestingModule, RootFixtureService, RootCmp, RouterTestingHarness;
var init_testing4 = __esm({
  "node_modules/@angular/router/fesm2022/testing.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_testing();
    init_router2();
    init_router_module();
    init_testing2();
    RouterTestingModule = class _RouterTestingModule {
      static withRoutes(routes, config) {
        return {
          ngModule: _RouterTestingModule,
          providers: [
            { provide: ROUTES, multi: true, useValue: routes },
            { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _RouterTestingModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.0", ngImport: core_exports, type: _RouterTestingModule, exports: [RouterModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _RouterTestingModule, providers: [
        ROUTER_PROVIDERS,
        provideLocationMocks(),
        withPreloading(NoPreloading).\u0275providers,
        { provide: ROUTES, multi: true, useValue: [] }
      ], imports: [RouterModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: RouterTestingModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [RouterModule],
        providers: [
          ROUTER_PROVIDERS,
          provideLocationMocks(),
          withPreloading(NoPreloading).\u0275providers,
          { provide: ROUTES, multi: true, useValue: [] }
        ]
      }]
    }] });
    RootFixtureService = class _RootFixtureService {
      fixture;
      harness;
      createHarness() {
        if (this.harness) {
          throw new Error("Only one harness should be created per test.");
        }
        this.harness = new RouterTestingHarness(this.getRootFixture());
        return this.harness;
      }
      getRootFixture() {
        if (this.fixture !== void 0) {
          return this.fixture;
        }
        this.fixture = TestBed.createComponent(RootCmp);
        this.fixture.detectChanges();
        return this.fixture;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _RootFixtureService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _RootFixtureService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: RootFixtureService, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    RootCmp = class _RootCmp {
      outlet;
      routerOutletData = signal(void 0, ...ngDevMode ? [{ debugName: "routerOutletData" }] : []);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _RootCmp, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.1.0", type: _RootCmp, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "outlet", first: true, predicate: RouterOutlet, descendants: true }], ngImport: core_exports, template: '<router-outlet [routerOutletData]="routerOutletData()"></router-outlet>', isInline: true, dependencies: [{ kind: "directive", type: RouterOutlet, selector: "router-outlet", inputs: ["name", "routerOutletData"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: RootCmp, decorators: [{
      type: Component,
      args: [{
        template: '<router-outlet [routerOutletData]="routerOutletData()"></router-outlet>',
        imports: [RouterOutlet]
      }]
    }], propDecorators: { outlet: [{
      type: ViewChild,
      args: [RouterOutlet]
    }] } });
    RouterTestingHarness = class {
      /**
       * Creates a `RouterTestingHarness` instance.
       *
       * The `RouterTestingHarness` also creates its own root component with a `RouterOutlet` for the
       * purposes of rendering route components.
       *
       * Throws an error if an instance has already been created.
       * Use of this harness also requires `destroyAfterEach: true` in the `ModuleTeardownOptions`
       *
       * @param initialUrl The target of navigation to trigger before returning the harness.
       */
      static create(initialUrl) {
        return __async(this, null, function* () {
          const harness = TestBed.inject(RootFixtureService).createHarness();
          if (initialUrl !== void 0) {
            yield harness.navigateByUrl(initialUrl);
          }
          return harness;
        });
      }
      /**
       * Fixture of the root component of the RouterTestingHarness
       */
      fixture;
      /** @internal */
      constructor(fixture) {
        this.fixture = fixture;
      }
      /** Instructs the root fixture to run change detection. */
      detectChanges() {
        this.fixture.detectChanges();
      }
      /** The `DebugElement` of the `RouterOutlet` component. `null` if the outlet is not activated. */
      get routeDebugElement() {
        const outlet = this.fixture.componentInstance.outlet;
        if (!outlet || !outlet.isActivated) {
          return null;
        }
        return this.fixture.debugElement.query((v) => v.componentInstance === outlet.component);
      }
      /** The native element of the `RouterOutlet` component. `null` if the outlet is not activated. */
      get routeNativeElement() {
        return this.routeDebugElement?.nativeElement ?? null;
      }
      navigateByUrl(url, requiredRoutedComponentType) {
        return __async(this, null, function* () {
          const router = TestBed.inject(Router);
          let resolveFn;
          const redirectTrackingPromise = new Promise((resolve) => {
            resolveFn = resolve;
          });
          afterNextNavigation(TestBed.inject(Router), resolveFn);
          yield router.navigateByUrl(url);
          yield redirectTrackingPromise;
          this.fixture.detectChanges();
          const outlet = this.fixture.componentInstance.outlet;
          if (outlet && outlet.isActivated && outlet.activatedRoute.component) {
            const activatedComponent = outlet.component;
            if (requiredRoutedComponentType !== void 0 && !(activatedComponent instanceof requiredRoutedComponentType)) {
              throw new Error(`Unexpected routed component type. Expected ${requiredRoutedComponentType.name} but got ${activatedComponent.constructor.name}`);
            }
            return activatedComponent;
          } else {
            if (requiredRoutedComponentType !== void 0) {
              throw new Error(`Unexpected routed component type. Expected ${requiredRoutedComponentType.name} but the navigation did not activate any component.`);
            }
            return null;
          }
        });
      }
    };
  }
});

// angular:jit:template:src/app/admin-dashboard/admin-dashboard.html
var admin_dashboard_default;
var init_admin_dashboard = __esm({
  "angular:jit:template:src/app/admin-dashboard/admin-dashboard.html"() {
    admin_dashboard_default = `<!-- <div class="home-container" style="background-color: #000000; color: #ffffff; height: 100vh;">
  <div class="home-left-content">
    <h1 class="home-title text-6xl font-semibold text-yellow-100" style="color:#fef9c3">
      Welcome to the Admin Dashboard
    </h1>
    <p class="home-description text-xl" style="color:#d4d4d8">
      Manage users, monitor activity, add new books, and keep your bookstore running smoothly. This is your control center for everything.
    </p>
    <small class="home-quote text-xl" style="color:#d4d4d8">
      \u201CLeadership is not about being in charge. It\u2019s about taking care of those in your charge.\u201D
    </small>
    <br />
    <button class="home-button mt-4 explore-button" (click)="movetoadminsignup()">
      Register New Admin
    </button>
  </div>
  <div class="home-right">
    <img src="/protection.png"  alt="Admin Panel Illustration" />
  </div>
</div> -->



<!-- new admin -->
<!-- Admin Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark px-4" style="background-color: #1a1a1a;">
  <!-- <a class="navbar-brand text-white" href="#">
    Admin Dashboard
  </a> -->
    <a class="navbar-brand" href="#">
    <img src="/Consultadd_Logo.png" alt="Logo" width="250" height="60">
  </a>

  <button class="navbar-toggler" type="button" (click)="toggleMenu()">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" [ngClass]="{ 'show': isMenuOpen }" id="adminNavbar">
    <ul class="navbar-nav mx-auto">
      <!-- <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/view" routerLinkActive="active">Employee Management</a>
      </li> -->
      <li class="nav-item dropdown mx-2">
  <a
    class="nav-link dropdown-toggle text-light"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Employee Management
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetoviewallusers()">Get All Users</a>
    </li>
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetosearchuserbyid()">Search By User ID</a>
    </li>
  </ul>
</li>

      <!-- <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/book-management" routerLinkActive="active">Book Management</a>
      </li> -->
      <li class="nav-item dropdown mx-2">
  <a
    class="nav-link dropdown-toggle text-light"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Donations
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetoviewalldonations()">Get All Donations</a>
    </li>
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetoupdatedonations()">Update Donation status</a>
    </li>
  </ul>
</li>


      <li class="nav-item dropdown mx-2">
  <a
    class="nav-link dropdown-toggle text-light"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Book Request
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetoviewallbookrequest()">Get All Book Request</a>
    </li>
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetoupdatebookrequest()">Update Book Status</a>
    </li>
  </ul>
</li>
            <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/book-requests" (click)="donatebook()">Donate Book</a>
      </li>

      <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/review-transaction" routerLinkActive="active">Review Transactions</a>
      </li>
    </ul>

    <!-- Optional logout -->
    <button class="btn btn-danger" (click)="onLogout()">Logout</button>
  </div>
</nav>

<!-- Admin Dashboard Content -->
<div class="home-container" style="background-color: #000000; color: #ffffff; height: 100vh;">
  <div class="home-left-content">
    <h1 class="home-title text-6xl font-semibold text-yellow-100" style="color:#fef9c3">
      Welcome to the Admin Dashboard
    </h1>
    <p class="home-description text-xl" style="color:#d4d4d8">
      Manage users, monitor activity, add new books, and keep your bookstore running smoothly. This is your control center for everything.
    </p>
    <!-- <small class="home-quote text-xl" style="color:#d4d4d8">
      \u201CLeadership is not about being in charge. It\u2019s about taking care of those in your charge.\u201D
    </small> -->
    <br />
    <button class="home-button mt-4 explore-button" (click)="movetoadminsignup()">
      Register New Admin
    </button>
  </div>
  <div class="home-right">
    <img src="/protection.png" alt="Admin Panel Illustration" />
  </div>
</div>

`;
  }
});

// angular:jit:style:src/app/admin-dashboard/admin-dashboard.css
var admin_dashboard_default2;
var init_admin_dashboard2 = __esm({
  "angular:jit:style:src/app/admin-dashboard/admin-dashboard.css"() {
    admin_dashboard_default2 = "/* src/app/admin-dashboard/admin-dashboard.css */\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n  position: relative;\n  overflow: hidden;\n}\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n}\n.home-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.home-left h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #343a40;\n}\n.home-left p {\n  font-size: 1.5rem;\n  color: #6c757d;\n}\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n  position: relative;\n  overflow: hidden;\n}\n.home-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 2;\n}\n.home-left h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #343a40;\n}\n.home-left p {\n  font-size: 1.5rem;\n  color: #6c757d;\n}\n.home-left-content {\n  padding-top: 60px;\n  padding-left: 30px;\n  padding-right: 30px;\n  text-align: left;\n  margin-top: 100px;\n  transform: translateY(-120px);\n}\n.home-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 1rem;\n}\n.home-description {\n  font-size: 1.2rem;\n  color: #4b5563;\n  line-height: 1.7;\n  max-width: 500px;\n  margin-bottom: 1.5rem;\n}\n.home-quote {\n  font-style: italic;\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.home-button {\n  padding: 12px 24px;\n  font-size: 1rem;\n  border-radius: 8px;\n  background-color: #4f46e5;\n  border: none;\n  transition: all 0.3s ease;\n}\n.home-button:hover {\n  background-color: #4338ca;\n}\n.home-right {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding-top: 40px;\n  padding-right: 20px;\n  z-index: 1;\n}\n.home-right img {\n  max-width: 90%;\n  height: auto;\n  max-height: 80vh;\n  transform: translateY(-80px);\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #facc15;\n}\n.explore-button {\n  background-color: #d90429;\n  color: #ffffff;\n  border: none;\n  padding: 12px 24px;\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 4px 12px rgba(217, 4, 41, 0.4);\n}\n.explore-button:hover {\n  background-color: #a00322;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(217, 4, 41, 0.6);\n}\n@media (max-width: 768px) {\n  .home-container {\n    flex-direction: column;\n    height: auto;\n    padding: 1.5rem;\n    text-align: center;\n  }\n  .home-left-content,\n  .home-right {\n    width: 100%;\n    padding: 1rem;\n  }\n  .home-title {\n    font-size: 1.5rem;\n  }\n  .home-description,\n  .home-quote {\n    font-size: 1rem;\n  }\n  .home-right img {\n    max-width: 80%;\n    margin-top: 1rem;\n  }\n  .home-button {\n    text-align: center;\n  }\n  .home-left-content {\n    padding-top: 60px;\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: left;\n    margin-top: 100px;\n    transform: translateY(-100px);\n  }\n}\n.nav-link {\n  transition: transform 0.1s ease-in-out, background-color 0.2s;\n  padding: 8px 16px;\n  border-radius: 6px;\n}\n.nav-link:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-link:active {\n  transform: scale(0.95);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n/*# sourceMappingURL=admin-dashboard.css.map */\n";
  }
});

// src/app/admin-dashboard/admin-dashboard.ts
var import_sweetalert2, AdminDashboard;
var init_admin_dashboard3 = __esm({
  "src/app/admin-dashboard/admin-dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_admin_dashboard();
    init_admin_dashboard2();
    init_common();
    init_http();
    init_core();
    init_forms();
    init_router();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    AdminDashboard = class AdminDashboard2 {
      http;
      router;
      isMenuOpen = false;
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }
      movetoadminsignup() {
        this.router.navigate(["/admin-signup"]);
      }
      movetoviewallusers() {
        this.router.navigate(["/admin-getallusers"]);
      }
      movetosearchuserbyid() {
        this.router.navigate(["/admin-searchbyid"]);
      }
      movetoviewalldonations() {
        this.router.navigate(["/admin-getalldonations"]);
      }
      movetoupdatedonations() {
        this.router.navigate(["/admin-updatedonations"]);
      }
      movetoviewallbookrequest() {
        this.router.navigate(["/admin-movetoviewallbookrequest"]);
      }
      movetoupdatebookrequest() {
        this.router.navigate(["/admin-movetoupdatebookrequest"]);
      }
      donatebook() {
        this.router.navigate(["/donatebook"]);
      }
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
      // onLogout() {
      //   // Replace with actual auth service logout if needed
      //   console.log('Admin Logged Out');
      //   alert("Admin Logged Out");
      // localStorage.removeItem('token');
      // localStorage.removeItem('role');
      // localStorage.removeItem('employeeId');
      // this.router.navigate(['/']);
      // }
      onLogout() {
        console.log("Admin Logged Out");
        import_sweetalert2.default.fire({
          icon: "success",
          title: "Logged Out",
          text: "\u{1F44B} You have been logged out successfully.",
          confirmButtonColor: "#3085d6",
          timer: 2e3,
          showConfirmButton: false
        }).then(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("employeeId");
          this.router.navigate(["/"]);
        });
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router }
      ];
    };
    AdminDashboard = __decorate([
      Component({
        selector: "app-admin-dashboard",
        imports: [FormsModule, CommonModule, HttpClientModule],
        template: admin_dashboard_default,
        styles: [admin_dashboard_default2]
      })
    ], AdminDashboard);
  }
});

// src/app/admin-dashboard/admin-dashboard.spec.ts
var require_admin_dashboard_spec = __commonJS({
  "src/app/admin-dashboard/admin-dashboard.spec.ts"(exports) {
    init_testing();
    init_testing4();
    init_admin_dashboard3();
    init_testing3();
    fdescribe("AdminDashboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            AdminDashboard,
            // ✅ Standalone component should be in imports
            RouterTestingModule,
            // ✅ For Router navigation
            HttpClientTestingModule
            // ✅ For HttpClient
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(AdminDashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should toggle menu", () => {
        expect(component.isMenuOpen).toBeFalse();
        component.toggleMenu();
        expect(component.isMenuOpen).toBeTrue();
      });
      it("should remove tokens and navigate on login", () => {
        spyOn(localStorage, "removeItem");
        const routerSpy = spyOn(component["router"], "navigate");
        component.onLogout();
        expect(localStorage.removeItem).toHaveBeenCalledWith("token");
        expect(localStorage.removeItem).toHaveBeenCalledWith("role");
        expect(localStorage.removeItem).toHaveBeenCalledWith("employeeId");
        expect(routerSpy).toHaveBeenCalledWith(["/"]);
      });
    });
  }
});
export default require_admin_dashboard_spec();
/*! Bundled license information:

@angular/router/fesm2022/testing.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=spec-app-admin-dashboard-admin-dashboard.spec.js.map
