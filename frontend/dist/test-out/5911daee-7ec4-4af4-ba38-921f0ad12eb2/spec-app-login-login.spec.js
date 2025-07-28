import {
  LoginComponent,
  init_login
} from "./chunk-42DJCOYL.js";
import {
  require_sweetalert2_all
} from "./chunk-M22DLADB.js";
import {
  Router,
  init_router
} from "./chunk-UEHRZZES.js";
import "./chunk-4H22UJ5Z.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing2
} from "./chunk-7IK4HZVL.js";
import {
  FormsModule,
  init_forms
} from "./chunk-7LRCIF4P.js";
import "./chunk-6FYC6G7U.js";
import {
  CommonModule,
  TestBed,
  fakeAsync,
  init_common,
  init_testing,
  tick
} from "./chunk-LYKWNGON.js";
import {
  __async,
  __commonJS,
  __toESM
} from "./chunk-6TRXNEZQ.js";

// src/app/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/login/login.spec.ts"(exports) {
    init_testing();
    init_login();
    init_testing2();
    init_router();
    init_forms();
    init_common();
    var import_sweetalert2 = __toESM(require_sweetalert2_all());
    describe("LoginComponent", () => {
      let component;
      let fixture;
      let httpMock;
      const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            LoginComponent,
            FormsModule,
            CommonModule,
            HttpClientTestingModule
          ],
          providers: [
            { provide: Router, useValue: routerSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        httpMock = TestBed.inject(HttpTestingController);
        fixture.detectChanges();
      }));
      afterEach(() => {
        httpMock.verify();
        localStorage.clear();
      });
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should login and navigate to seller dashboard", fakeAsync(() => {
        spyOn(import_sweetalert2.default, "fire").and.returnValue(Promise.resolve({}));
        component.loginData = { email: "seller@example.com", password: "123456" };
        component.onSubmit();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/login");
        expect(req.request.method).toBe("POST");
        req.flush({
          token: "mockToken",
          role: "SELLER",
          employeeId: "S001"
        });
        tick();
        expect(localStorage.getItem("token")).toBe("mockToken");
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/seller-dashboard"]);
      }));
      it("should navigate to buyer dashboard", fakeAsync(() => {
        spyOn(import_sweetalert2.default, "fire").and.returnValue(Promise.resolve({}));
        component.loginData = { email: "buyer@example.com", password: "buyerpass" };
        component.onSubmit();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/login");
        req.flush({
          token: "buyerToken",
          role: "BUYER",
          employeeId: "B001"
        });
        tick();
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/buyer-dashboard"]);
      }));
      it("should navigate to admin dashboard", fakeAsync(() => {
        spyOn(import_sweetalert2.default, "fire").and.returnValue(Promise.resolve({}));
        component.loginData = { email: "admin@example.com", password: "adminpass" };
        component.onSubmit();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/login");
        req.flush({
          token: "adminToken",
          role: "ADMIN",
          employeeId: "A001"
        });
        tick();
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/admin-dashboard"]);
      }));
      it("should show alert and navigate to root for unknown role", fakeAsync(() => {
        spyOn(window, "alert");
        spyOn(import_sweetalert2.default, "fire").and.returnValue(Promise.resolve({}));
        component.loginData = { email: "guest@example.com", password: "guestpass" };
        component.onSubmit();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/login");
        req.flush({
          token: "guestToken",
          role: "GUEST",
          employeeId: "G001"
        });
        tick();
        expect(window.alert).toHaveBeenCalledWith("Unknown role");
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/"]);
      }));
      it("should show SweetAlert with correct message on login failure", () => {
        spyOn(component["http"], "post").and.returnValue({
          subscribe: ({ error }) => error({ status: 401 })
        });
        const swalSpy = spyOn(import_sweetalert2.default, "fire").and.returnValue(Promise.resolve({}));
        component.onSubmit();
        expect(swalSpy).toHaveBeenCalledWith(jasmine.objectContaining({
          icon: "error",
          title: "Login Failed",
          text: "Please check your credentials and try again.",
          timer: 2e3,
          showConfirmButton: false,
          timerProgressBar: true
        }));
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-app-login-login.spec.js.map
