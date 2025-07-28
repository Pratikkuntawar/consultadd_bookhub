import {
  Router,
  init_router
} from "./chunk-V7S46CQ4.js";
import {
  FormsModule,
  init_forms
} from "./chunk-E4GEBTZE.js";
import {
  CommonModule,
  init_common
} from "./chunk-6UKHD5WX.js";
import {
  HttpClient,
  init_http
} from "./chunk-CSZOH65J.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-55HYZWLT.js";
import {
  __esm
} from "./chunk-V6FC2DIM.js";

// angular:jit:template:src/app/signup/signup.html
var signup_default;
var init_signup = __esm({
  "angular:jit:template:src/app/signup/signup.html"() {
    signup_default = '<!-- <div class="modal-backdrop show">\n  <div class="modal d-block" tabindex="-1">\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content text-center p-4">\n        <h5 class="modal-title">Signup</h5>\n        <form>\n          <input type="text" class="form-control mb-2" placeholder="Enter Name" />\n          <input type="email" class="form-control mb-2" placeholder="Enter Email" />\n          <input type="password" class="form-control mb-2" placeholder="Enter Password" />\n          <button type="submit" class="btn btn-primary" (click)="moveToLoginRoute()">Register</button>\n          <button type="button" class="btn btn-danger ms-2" (click)="handleClose()">Close</button>\n        </form>\n        <p class="mt-3 text-muted">\n          Already have an account? <a href="#" (click)="goToLogin()">Login here</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n\n\n<!-- new signup form -->\n <!-- <div class="modal-backdrop show">\n  <div class="modal d-block" tabindex="-1">\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content text-center p-4 bg-dark text-light rounded custom-modal-content">\n        <h5 class="modal-title mb-4 fw-bold">Signup</h5>\n        <form (ngSubmit)="registerUser()" class="needs-validation" novalidate>\n          \n          <div class="form-group mb-3">\n            <input type="text" class="form-control text-center" placeholder="Enter Full Name" [(ngModel)]="signupData.fullName" name="fullName" required />\n          </div>\n          \n          <div class="form-group mb-3">\n            <input type="email" class="form-control text-center" placeholder="Enter Email" [(ngModel)]="signupData.email" name="email" required />\n          </div>\n          \n          <div class="form-group mb-3">\n            <input type="password" class="form-control text-center" placeholder="Enter Password" [(ngModel)]="signupData.password" name="password" required />\n          </div>\n\n          <div class="form-group mb-3">\n            <select class="form-select text-center" [(ngModel)]="signupData.role" name="role" required>\n              <option value="" disabled selected>Select Role</option>\n              <option value="BUYER">Buyer</option>\n              <option value="SELLER">Seller</option>\n            </select>\n          </div>\n\n          <div class="form-group mb-4">\n            <select class="form-select text-center" [(ngModel)]="signupData.department" name="department" required>\n              <option value="" disabled selected>Select Department</option>\n              <option value="HR">HR</option>\n              <option value="CODING">Coding</option>\n              <option value="DELIVERY">Delivery</option>\n              <option value="SALES">Sales</option>\n              <option value="MARKETING">Marketing</option>\n            </select>\n          </div>\n\n          <div class="d-grid gap-2 d-md-flex justify-content-center">\n            <button type="submit" class="btn btn-outline-primary px-4">Register</button>\n            <button type="button" class="btn btn-outline-danger px-4" (click)="handleClose()">Close</button>\n          </div>\n        </form>\n\n        <p class="mt-4 text-dark small">\n          Already have an account? \n          <a  class="text-info fw-semibold" (click)="moveToLoginRoute() ">Login here</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class="modal-backdrop show">\n  <div class="modal d-block" tabindex="-1">\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content text-center p-4 bg-dark text-light rounded custom-modal-content">\n        <h5 class="modal-title mb-4 fw-bold">Signup</h5>\n\n        <form #signupForm="ngForm" (ngSubmit)="registerUser()" class="needs-validation" novalidate>\n\n          <!-- Full Name -->\n          <div class="form-group mb-3">\n            <input \n              type="text" \n              class="form-control text-center" \n              placeholder="Enter Full Name" \n              name="fullName" \n              required \n              [(ngModel)]="signupData.fullName"\n              #fullNameRef="ngModel" />\n            <small class="text-danger" *ngIf="fullNameRef.invalid && fullNameRef.touched">\n              Full name is required.\n            </small>\n          </div>\n\n          <!-- Email -->\n          <div class="form-group mb-3">\n            <input \n              type="email" \n              class="form-control text-center" \n              placeholder="Enter Email" \n              name="email" \n              required \n              pattern="^[a-zA-Z0-9._%+-]+@consultadd\\.com$"\n              [(ngModel)]="signupData.email"\n              #emailRef="ngModel" />\n            <small class="text-danger" *ngIf="emailRef.invalid && emailRef.touched">\n              Valid Consultadd email is required \n            </small>\n          </div>\n\n          <!-- Password -->\n          <div class="form-group mb-3">\n            <input \n              type="password" \n              class="form-control text-center" \n              placeholder="Enter Password" \n              name="password" \n              required \n              minlength="6"\n              [(ngModel)]="signupData.password"\n              #passwordRef="ngModel" />\n            <small class="text-danger" *ngIf="passwordRef.invalid && passwordRef.touched">\n              Password is required (min 6 characters).\n            </small>\n          </div>\n\n          <!-- Role -->\n          <div class="form-group mb-3">\n            <select \n              class="form-select text-center" \n              name="role" \n              required \n              [(ngModel)]="signupData.role"\n              #roleRef="ngModel">\n              <option value="" disabled selected>Select Role</option>\n              <option value="BUYER">Buyer</option>\n              <option value="SELLER">Seller</option>\n            </select>\n            <small class="text-danger" *ngIf="roleRef.invalid && roleRef.touched">\n              Role is required.\n            </small>\n          </div>\n\n          <!-- Department -->\n          <div class="form-group mb-4">\n            <select \n              class="form-select text-center" \n              name="department" \n              required \n              [(ngModel)]="signupData.department"\n              #departmentRef="ngModel">\n              <option value="" disabled selected>Select Department</option>\n              <option value="HR">HR</option>\n              <option value="CODING">Coding</option>\n              <option value="DELIVERY">Delivery</option>\n              <option value="SALES">Sales</option>\n              <option value="MARKETING">Marketing</option>\n            </select>\n            <small class="text-danger" *ngIf="departmentRef.invalid && departmentRef.touched">\n              Department is required.\n            </small>\n          </div>\n\n          <!-- Buttons -->\n          <div class="d-grid gap-2 d-md-flex justify-content-center">\n            <button \n              type="submit" \n              class="btn btn-outline-primary px-4" \n              [disabled]="signupForm.invalid">\n              Register\n            </button>\n            <button \n              type="button" \n              class="btn btn-outline-danger px-4" \n              (click)="handleClose()">\n              Close\n            </button>\n          </div>\n        </form>\n\n        <p class="mt-4 text-dark small">\n          Already have an account? \n          <a class="text-info fw-semibold" (click)="moveToLoginRoute()">Login here</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/signup/signup.css
var signup_default2;
var init_signup2 = __esm({
  "angular:jit:style:src/app/signup/signup.css"() {
    signup_default2 = "/* src/app/signup/signup.css */\n.custom-modal-content {\n  width: 100%;\n  max-width: 420px;\n  margin: auto;\n  border-radius: 12px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);\n  background-color: #1e1e1e !important;\n}\ninput::placeholder,\nselect option {\n  text-align: center;\n  color: #ccc;\n}\ninput:focus,\nselect:focus {\n  border-color: #0d6efd;\n  box-shadow: 0 0 5px rgba(13, 110, 253, 0.5);\n}\n.form-control,\n.form-select {\n  background-color: #2c2c2c;\n  color: #fff;\n  border: 1px solid #444;\n}\n.btn-outline-primary,\n.btn-outline-danger {\n  border-radius: 25px;\n}\n.btn-outline-primary:hover,\n.btn-outline-danger:hover {\n  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);\n}\na.text-info:hover {\n  text-decoration: underline;\n}\n.modal-backdrop {\n  background-color: rgba(0, 0, 0, 0.9);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1040;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.custom-modal-content {\n  background-color: white !important;\n  color: #333 !important;\n  border-radius: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n  animation: popIn 0.4s ease-out;\n}\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.custom-modal-content input,\n.custom-modal-content select {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 1rem;\n}\n.custom-modal-content button {\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.custom-modal-content button:hover {\n  transform: scale(1.05);\n}\n.custom-modal-content a {\n  color: #007bff;\n  text-decoration: none;\n}\n.custom-modal-content a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=signup.css.map */\n";
  }
});

// src/app/signup/signup.ts
var SignupComponent;
var init_signup3 = __esm({
  "src/app/signup/signup.ts"() {
    "use strict";
    init_tslib_es6();
    init_signup();
    init_signup2();
    init_common();
    init_http();
    init_core();
    init_forms();
    init_router();
    SignupComponent = class SignupComponent2 {
      http;
      router;
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }
      signupData = {
        fullName: "",
        email: "",
        password: "",
        role: "",
        department: ""
      };
      handleClose() {
        this.router.navigate(["/"]);
      }
      registerUser() {
        const apiUrl = "http://localhost:8080/consultadd/auth/register";
        this.http.post(apiUrl, this.signupData).subscribe({
          next: (response) => {
            console.log("Registration successful:", response);
            alert("Registered successfully!");
            this.router.navigate(["/login"]);
          },
          error: (error) => {
            console.error("Registration failed:", error);
            alert("Registration failed. Please try again.");
          }
        });
      }
      moveToLoginRoute() {
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router }
      ];
    };
    SignupComponent = __decorate([
      Component({
        selector: "app-signup",
        imports: [CommonModule, FormsModule],
        template: signup_default,
        styles: [signup_default2]
      })
    ], SignupComponent);
  }
});

export {
  SignupComponent,
  init_signup3 as init_signup
};
//# sourceMappingURL=chunk-BLVJZ3M4.js.map
