import {
  HttpClientTestingModule,
  init_testing as init_testing2
} from "./chunk-EH7TG6PV.js";
import {
  FormsModule,
  init_forms
} from "./chunk-Z6YZQFV4.js";
import {
  Router,
  init_router
} from "./chunk-FLCWKNVA.js";
import "./chunk-OEDC4MKO.js";
import {
  HttpClient,
  HttpHeaders,
  init_http
} from "./chunk-IAEXST72.js";
import {
  Component,
  EventEmitter,
  Output,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-JXZAXFWT.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/admin-signup/admin-signup.html
var admin_signup_default;
var init_admin_signup = __esm({
  "angular:jit:template:src/app/admin-signup/admin-signup.html"() {
    admin_signup_default = '<div class="modal-backdrop show">\n  <div class="modal d-block" tabindex="-1">\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content text-center p-4 bg-dark text-light rounded custom-modal-content">\n        <h5 class="modal-title mb-4 fw-bold">Signup</h5>\n        <form (ngSubmit)="registerUser()" class="needs-validation" novalidate>\n          \n          <div class="form-group mb-3">\n            <input type="text" class="form-control text-center" placeholder="Enter Full Name" [(ngModel)]="signupData.fullName" name="fullName" required />\n          </div>\n          \n          <div class="form-group mb-3">\n            <input type="email" class="form-control text-center" placeholder="Enter Email" [(ngModel)]="signupData.email" name="email" required />\n          </div>\n          \n          <div class="form-group mb-3">\n            <input type="password" class="form-control text-center" placeholder="Enter Password" [(ngModel)]="signupData.password" name="password" required />\n          </div>\n\n          <div class="form-group mb-3">\n            <select class="form-select text-center" [(ngModel)]="signupData.role" name="role" required>\n              <option value="" disabled selected>Select Role</option>\n              <option value="ADMIN">ADMIN</option>\n            </select>\n          </div>\n\n          <div class="form-group mb-4">\n            <select class="form-select text-center" [(ngModel)]="signupData.department" name="department" required>\n              <option value="" disabled selected>Select Department</option>\n              <option value="HR">HR</option>\n              <option value="CODING">Coding</option>\n              <option value="DELIVERY">Delivery</option>\n              <option value="SALES">Sales</option>\n              <option value="MARKETING">Marketing</option>\n            </select>\n          </div>\n\n          <div class="d-grid gap-2 d-md-flex justify-content-center">\n            <button type="submit" class="btn btn-outline-primary px-4" >Register</button>\n            <button type="button" class="btn btn-outline-danger px-4" (click)="handleClose()">Close</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/admin-signup/admin-signup.css
var admin_signup_default2;
var init_admin_signup2 = __esm({
  "angular:jit:style:src/app/admin-signup/admin-signup.css"() {
    admin_signup_default2 = "/* src/app/admin-signup/admin-signup.css */\n/*# sourceMappingURL=admin-signup.css.map */\n";
  }
});

// src/app/admin-signup/admin-signup.ts
var AdminSignup;
var init_admin_signup3 = __esm({
  "src/app/admin-signup/admin-signup.ts"() {
    "use strict";
    init_tslib_es6();
    init_admin_signup();
    init_admin_signup2();
    init_http();
    init_core();
    init_forms();
    init_router();
    AdminSignup = class AdminSignup2 {
      http;
      router;
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }
      showModal = true;
      handleClose() {
        this.router.navigate(["/admin-dashboard"]);
      }
      close = new EventEmitter();
      switchToLogin = new EventEmitter();
      signupData = {
        fullName: "",
        email: "",
        password: "",
        role: "",
        department: ""
      };
      // registerUser() {
      //   const apiUrl = 'http://localhost:8080/consultadd/admin/create-admin'; // ✅ Replace with your backend endpoint
      //   this.http.post(apiUrl, this.signupData).subscribe({
      //     next: (response) => {
      //       console.log('Registration successful:', response);
      //       alert('Registered successfully!');
      //     },
      //     error: (error) => {
      //       console.error('Registration failed:', error);
      //       alert('Registration failed. Please try again.');
      //     }
      //   });
      // }
      registerUser() {
        const apiUrl = "http://localhost:8080/consultadd/admin/create-admin";
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        });
        this.http.post(apiUrl, this.signupData, { headers }).subscribe({
          next: (response) => {
            console.log("Registration successful:", response);
            alert("Registered successfully!");
            this.router.navigate(["/admin-dashboard"]);
          },
          error: (error) => {
            console.error("Registration failed:", error);
            alert("Registration failed. Please try again.");
          }
        });
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router }
      ];
      static propDecorators = {
        close: [{ type: Output }],
        switchToLogin: [{ type: Output }]
      };
    };
    AdminSignup = __decorate([
      Component({
        selector: "app-admin-signup",
        imports: [FormsModule],
        template: admin_signup_default,
        styles: [admin_signup_default2]
      })
    ], AdminSignup);
  }
});

// src/app/admin-signup/admin-signup.spec.ts
var require_admin_signup_spec = __commonJS({
  "src/app/admin-signup/admin-signup.spec.ts"(exports) {
    init_testing();
    init_admin_signup3();
    init_testing2();
    init_router();
    init_forms();
    fdescribe("AdminSignup", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [
            AdminSignup,
            // Standalone component
            HttpClientTestingModule,
            //  For HttpClient
            FormsModule
            //  Required since component imports it
          ],
          providers: [
            { provide: Router, useValue: mockRouter }
            //  Mocked Router
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(AdminSignup);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should call registerUser and navigate on successful registration", () => {
        spyOn(component["http"], "post").and.callFake(() => {
          return {
            subscribe: ({ next }) => next({ message: "Success" })
          };
        });
        component.signupData = {
          fullName: "John Doe",
          email: "john@consultadd.com",
          password: "password",
          role: "ADMIN",
          department: "HR"
        };
        component.registerUser();
        expect(mockRouter.navigate).toHaveBeenCalledWith(["/admin-dashboard"]);
      });
    });
  }
});
export default require_admin_signup_spec();
//# sourceMappingURL=spec-app-admin-signup-admin-signup.spec.js.map
