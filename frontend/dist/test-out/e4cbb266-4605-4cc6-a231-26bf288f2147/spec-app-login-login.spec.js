import {
  LoginComponent,
  init_login
} from "./chunk-J6XW6LVX.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing2
} from "./chunk-JWUIQVFS.js";
import "./chunk-M22DLADB.js";
import {
  Router,
  init_router
} from "./chunk-CDNPHVEI.js";
import "./chunk-CZVOOQAL.js";
import "./chunk-7OUSRNRQ.js";
import {
  FormsModule,
  init_forms
} from "./chunk-5ZJVNJSG.js";
import {
  CommonModule,
  init_common
} from "./chunk-AMQQJ5OH.js";
import "./chunk-XENIYTW7.js";
import "./chunk-BYESBSSC.js";
import {
  TestBed,
  init_testing
} from "./chunk-CBUZ25KJ.js";
import {
  __async,
  __commonJS
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
    fdescribe("LoginComponent", () => {
      let component;
      let fixture;
      let httpMock;
      const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            LoginComponent,
            // ✅ Standalone component goes here
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
      });
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should make login request and navigate to seller dashboard", () => {
        component.loginData = { email: "test@example.com", password: "123456" };
        component.onSubmit();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/login");
        expect(req.request.method).toBe("POST");
        req.flush({
          token: "mockToken",
          role: "SELLER",
          employeeId: "E123"
        });
        expect(localStorage.getItem("token")).toBe("mockToken");
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/seller-dashboard"]);
      });
      it("should navigate to buyer dashboard if role is BUYER", () => {
        component.loginData = { email: "buyer@example.com", password: "buyerpass" };
        component.onSubmit();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/login");
        req.flush({
          token: "buyerToken",
          role: "BUYER",
          employeeId: "B101"
        });
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/buyer-dashboard"]);
      });
      it("should show alert and navigate to root for unknown role", () => {
        spyOn(window, "alert");
        component.loginData = { email: "unknown@example.com", password: "123456" };
        component.onSubmit();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/login");
        req.flush({
          token: "xyz",
          role: "GUEST",
          employeeId: "G001"
        });
        expect(window.alert).toHaveBeenCalledWith("Unknown role");
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/"]);
      });
      it("should show alert on login failure", () => {
        spyOn(window, "alert");
        component.loginData = { email: "fail@example.com", password: "wrong" };
        component.onSubmit();
        const req = httpMock.expectOne("http://localhost:8080/consultadd/auth/login");
        req.flush({ message: "Unauthorized" }, { status: 401, statusText: "Unauthorized" });
        expect(window.alert).toHaveBeenCalledWith("Login failed. Please check your credentials.");
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-app-login-login.spec.js.map
