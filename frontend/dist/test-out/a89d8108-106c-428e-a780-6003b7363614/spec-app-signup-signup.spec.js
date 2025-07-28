import {
  SignupComponent,
  init_signup
} from "./chunk-HNGOFV3Y.js";
import {
  RouterTestingModule,
  init_testing as init_testing2
} from "./chunk-R7TP3ZMA.js";
import "./chunk-SEJD6WZA.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing3
} from "./chunk-JWUIQVFS.js";
import "./chunk-M22DLADB.js";
import {
  FormsModule,
  init_forms
} from "./chunk-5ZJVNJSG.js";
import {
  Router,
  init_router
} from "./chunk-CDNPHVEI.js";
import "./chunk-CZVOOQAL.js";
import "./chunk-7OUSRNRQ.js";
import {
  Location,
  init_common
} from "./chunk-AMQQJ5OH.js";
import "./chunk-XENIYTW7.js";
import "./chunk-BYESBSSC.js";
import {
  Component,
  TestBed,
  __decorate,
  fakeAsync,
  init_core,
  init_testing,
  init_tslib_es6,
  tick
} from "./chunk-CBUZ25KJ.js";
import {
  __async,
  __commonJS
} from "./chunk-6TRXNEZQ.js";

// src/app/signup/signup.spec.ts
var require_signup_spec = __commonJS({
  "src/app/signup/signup.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_signup();
    init_testing3();
    init_router();
    init_testing2();
    init_forms();
    init_common();
    init_core();
    var DummyComponent = class DummyComponent {
    };
    DummyComponent = __decorate([
      Component({ template: "" })
    ], DummyComponent);
    fdescribe("SignupComponent", () => {
      let component;
      let fixture;
      let httpMock;
      let router;
      let location;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            SignupComponent,
            // ✅ standalone component
            HttpClientTestingModule,
            // ✅ mock HttpClient
            RouterTestingModule.withRoutes([
              { path: "", component: DummyComponent },
              { path: "login", component: DummyComponent }
            ]),
            FormsModule
            // ✅ ngModel binding
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        httpMock = TestBed.inject(HttpTestingController);
        fixture.detectChanges();
      }));
      afterEach(() => {
        httpMock.verify();
      });
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it('should navigate to "/" on handleClose()', fakeAsync(() => {
        component.handleClose();
        tick();
        expect(location.path()).toBe("/");
      }));
      it("should navigate to /login when moveToLoginRoute is called", fakeAsync(() => {
        const routerSpy = spyOn(router, "navigate");
        component.moveToLoginRoute();
        tick();
        expect(routerSpy).toHaveBeenCalledWith(["/login"]);
      }));
      it("should send signup data and navigate to /login on success", fakeAsync(() => {
        const routerSpy = spyOn(router, "navigate");
        spyOn(window, "alert");
        component.signupData = {
          fullName: "Test User",
          email: "use@consultadd.com",
          password: "password123",
          role: "ADMIN",
          department: "HR"
        };
        component.registerUser();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/register");
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toEqual(component.signupData);
        req.flush({ message: "Success" });
        tick();
        expect(window.alert).toHaveBeenCalledWith("Registered successfully!");
        expect(routerSpy).toHaveBeenCalledWith(["/login"]);
      }));
      it("should show alert on registration error", fakeAsync(() => {
        spyOn(window, "alert");
        component.registerUser();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/register");
        req.flush({ message: "Error" }, { status: 400, statusText: "Bad Request" });
        tick();
        expect(window.alert).toHaveBeenCalledWith("Registration failed. Please try again.");
      }));
    });
  }
});
export default require_signup_spec();
//# sourceMappingURL=spec-app-signup-signup.spec.js.map
