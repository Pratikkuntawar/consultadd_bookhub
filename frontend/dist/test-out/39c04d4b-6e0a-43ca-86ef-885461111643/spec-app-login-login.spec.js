import {
  EmailDomainValidator,
  init_emailValidator
} from "./chunk-OX7ZNJV4.js";
import {
  ToastrService,
  init_ngx_toastr
} from "./chunk-EXYQI6JZ.js";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-ZYOBGB3U.js";
import {
  Router,
  RouterLink,
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
  Auth,
  init_auth
} from "./chunk-ZLCZPCCD.js";
import "./chunk-IOJ5AGST.js";
import "./chunk-OI3I74CY.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-KPYZTAT5.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/login/login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src/app/login/login.html"() {
    login_default = `<main class="main d-flex justify-content-center align-items-center vh-100r">
 
<div class="p-5 border d-flex flex-column rounded bg-white shadow mt-5" style="min-width: 500px; min-height: 600px;">
  
    <form [formGroup]="empForm" (ngSubmit)="onSubmit()">

  <h2  style="margin-bottom: 60px; text-align:center;">Login Form </h2>
  
 <div class="d-flex align-items-center gap-5 mb-2 ">
    <label  class="mb-0">Email</label>
    <div class="w-100 mt-2">
    <input id="email" type="email" formControlName="email" class="form-control w-75" placeholder="Enter your Email" ngModel>
    <div class="text-danger lh-sm" style="font-size: 13px;margin-left: 9px;" *ngIf="empForm.controls['email'].invalid && (empForm.controls['email'].touched || empForm.controls['email'].dirty)">
    <label class="text-danger" *ngIf="empForm.controls['email'].errors?.['required']">Email required</label>
    <label class="text-danger" *ngIf="empForm.controls['email'].errors?.['emailStartError']">Email can't start with number</label>
    <label class="text-danger" *ngIf="empForm.controls['email'].errors?.['emailDomainError']">Invalid Email domain</label>
    </div>
  </div>
  </div>


  <div class="d-flex align-items-center gap-3">
    <label for="password" class="mb-0">Password</label>
       <div class="w-100 mt-2">
    <input id="password" type="password" formControlName="password" class="form-control w-75" placeholder="Enter your password" ngModel>
   <div class="text-danger lh-sm" style="font-size: 13px;margin-left: 9px;margin-top: 2px;" *ngIf="empForm.controls['password'].invalid && (empForm.controls['password'].touched || empForm.controls['password'].dirty)">
  <label class="text-danger" *ngIf="empForm.controls['password'].errors?.['pattern']">Contact No. cannot be  other than digit</label>
        <label class="text-danger" *ngIf="empForm.controls['password'].errors?.['required']">password. required</label>
    <label class="text-danger" *ngIf="empForm.controls['password'].errors?.['minlength']">password at least 6 size</label>
    </div>
  </div>
  </div>
<div class="row m-5">
  <button class="btn btn-primary flex-grow-1 px-3" type="submit" [disabled]="empForm.invalid">Login</button>
  <h3 class="my-3 w-100 h-100" style="text-align: center;">Or</h3>
  <button class="btn btn-primary flex-grow-1 px-3" type="button" [routerLink]="['/signup']" >Register</button>
</div>

</form>
</div>

</main>`;
  }
});

// angular:jit:style:src/app/login/login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src/app/login/login.css"() {
    login_default2 = "/* src/app/login/login.css */\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/login/login.ts
var Login;
var init_login3 = __esm({
  "src/app/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    init_forms();
    init_router();
    init_forms();
    init_auth();
    init_ngx_cookie_service();
    init_router();
    init_ngx_toastr();
    init_emailValidator();
    init_common();
    Login = class Login2 {
      authSevice;
      toasterService;
      cookieService;
      router;
      allowedDomain = ["consultadd.com", "hyperflex.com", "knowcloudai.com"];
      constructor(authSevice, toasterService, cookieService, router) {
        this.authSevice = authSevice;
        this.toasterService = toasterService;
        this.cookieService = cookieService;
        this.router = router;
      }
      empForm = new FormGroup({
        email: new FormControl("", {
          validators: [Validators.required, EmailDomainValidator(this.allowedDomain)]
        }),
        password: new FormControl("", {
          validators: [Validators.required, Validators.minLength(6)]
        })
      });
      onSubmit() {
        const formData = this.empForm.value;
        console.log("Function called after onsubmit" + formData);
        this.authSevice.login(formData).subscribe({
          next: (res) => {
            this.cookieService.set("token", res.token, { path: "/" });
            this.toasterService.success("Login Successfuly", "Success");
            this.router.navigate(["/dashboard"]);
          },
          error: (err) => {
            console.error("Login error", err);
            this.toasterService.error("Invalid Credentials", "Failed");
            this.router.navigate(["/login"]);
          }
        });
      }
      static ctorParameters = () => [
        { type: Auth },
        { type: ToastrService },
        { type: CookieService },
        { type: Router }
      ];
    };
    Login = __decorate([
      Component({
        selector: "app-login",
        imports: [FormsModule, RouterLink, ReactiveFormsModule, CommonModule],
        template: login_default,
        styles: [login_default2]
      })
    ], Login);
  }
});

// src/app/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    describe("Login", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Login]
        }).compileComponents();
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-app-login-login.spec.js.map
