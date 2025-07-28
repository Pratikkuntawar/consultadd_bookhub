import {
  SignupComponent,
  init_signup
} from "./chunk-EXZH24WW.js";
import {
  RouterTestingModule,
  init_testing as init_testing2
} from "./chunk-PTJO3FHV.js";
import "./chunk-RP5PYVYJ.js";
import {
  require_sweetalert2_all
} from "./chunk-M22DLADB.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing3
} from "./chunk-EH7TG6PV.js";
import {
  Router,
  init_router
} from "./chunk-FLCWKNVA.js";
import "./chunk-OEDC4MKO.js";
import {
  FormsModule,
  init_forms
} from "./chunk-Z6YZQFV4.js";
import "./chunk-IAEXST72.js";
import {
  Component,
  Location,
  TestBed,
  __decorate,
  fakeAsync,
  flush,
  init_common,
  init_core,
  init_testing,
  init_tslib_es6,
  tick
} from "./chunk-JXZAXFWT.js";
import {
  __async,
  __commonJS,
  __toESM
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
    var import_sweetalert2 = __toESM(require_sweetalert2_all());
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
            HttpClientTestingModule,
            RouterTestingModule.withRoutes([
              { path: "", component: DummyComponent },
              { path: "login", component: DummyComponent }
            ]),
            FormsModule
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
      it("should register user and navigate to /login after Swal closes", fakeAsync(() => {
        const routerSpy = spyOn(router, "navigate");
        component.signupData = {
          fullName: "Test User",
          email: "test@consultadd.com",
          password: "pass1234",
          role: "ADMIN",
          department: "HR"
        };
        component.registerUser();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/register");
        req.flush({ message: "Registered" });
        tick(2e3);
        fixture.whenStable().then(() => {
          expect(routerSpy).toHaveBeenCalledWith(["/login"]);
        });
        flush();
      }));
      it("should call Swal.fire and handle confirmation", () => __async(null, null, function* () {
        const swalSpy = spyOn(import_sweetalert2.default, "fire").and.returnValue(Promise.resolve({
          isConfirmed: true,
          isDenied: false,
          isDismissed: false,
          value: true
        }));
        expect(swalSpy).toHaveBeenCalled();
      }));
    });
  }
});
export default require_signup_spec();
//# sourceMappingURL=spec-app-signup-signup.spec.js.map
