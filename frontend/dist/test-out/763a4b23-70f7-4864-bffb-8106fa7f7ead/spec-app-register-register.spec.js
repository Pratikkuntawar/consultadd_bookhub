import {
  EmailDomainValidator,
  init_emailValidator
} from "./chunk-2RQIY3GI.js";
import {
  Auth,
  init_auth
} from "./chunk-J2GLM4XY.js";
import {
  Router,
  RouterLink,
  init_router
} from "./chunk-ICXU6X3D.js";
import {
  ToastrService,
  init_ngx_toastr
} from "./chunk-MSDT2LP6.js";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-V7YBN5IV.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-JFTBSIV3.js";
import "./chunk-5M7HHSWD.js";
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
  init_testing,
  init_tslib_es6
} from "./chunk-7KP2XXLP.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-V6FC2DIM.js";

// angular:jit:template:src/app/register/register.html
var register_default;
var init_register = __esm({
  "angular:jit:template:src/app/register/register.html"() {
    register_default = `<main class="main d-flex justify-content-center align-items-center vh-100r">
 
<div class="p-5 border mb-5 d-flex flex-column rounded bg-white shadow mt-5" style="min-width: 500px; max-height: 700px;">
  
    <form [formGroup]="empForm" (ngSubmit)="onSubmit()">
  <h2  style="margin-bottom: 30px; text-align:center;">Register Form </h2>

  <div class="d-flex align-items-center gap-5 mb-2 ">
    <label  class="mb-0">Name</label>
    <div class="w-100 mt-2">
    <input id="name" type="text" formControlName="name" class="form-control w-75" placeholder="Enter your Name" ngModel>
    <div class="text-danger  lh-sm" style="font-size: 13px;margin-left: 9px;margin-top: 2px;" *ngIf="empForm.controls['name'].invalid && (empForm.controls['name'].touched || empForm.controls['name'].dirty)">
    <label class="text-danger" *ngIf="empForm.controls['name'].errors?.['required']">Name required</label>
    <label class="text-danger" *ngIf="empForm.controls['name'].errors?.['minlength']">Minimum 4 length required</label>
    </div>
  </div>
  </div>

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

   <div class="d-flex align-items-center gap-4 mb-2 ">
    <label  class="mb-0">Contact</label>
     <div class="w-100 mt-2">
    <input id="contactNo" type="text" formControlName="contactNo" class="form-control " style="width: 70%;" placeholder="Enter your Contact No." ngModel>
      <div class="text-danger lh-sm" style="font-size: 13px;margin-left: 9px;margin-top: 2px;" *ngIf="empForm.controls['contactNo'].invalid && (empForm.controls['contactNo'].touched || empForm.controls['contactNo'].dirty)">
  <label class="text-danger" *ngIf="empForm.controls['contactNo'].errors?.['pattern']">Contact No. cannot be  other than digit</label>
        <label class="text-danger" *ngIf="empForm.controls['contactNo'].errors?.['required']">Contact No. required</label>
    <label class="text-danger" *ngIf="empForm.controls['contactNo'].errors?.['minlength']">Contact No. must be at least 10 digits</label>
    <label class="text-danger" *ngIf="empForm.controls['contactNo'].errors?.['maxlength']">Contact No. cannot be more than 10 digits</label>
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
 <button class="btn btn-primary flex-grow-1 px-3" type="submit" [disabled]="empForm.invalid">Register</button>
  <h3 class="my-3 w-100 h-100" style="text-align: center;">Or</h3>
 <button class="btn btn-primary flex-grow-1 px-3" type="button" [routerLink]="['/login']"   >Login</button>
 </div>

</form>
</div>

</main>`;
  }
});

// angular:jit:style:src/app/register/register.css
var register_default2;
var init_register2 = __esm({
  "angular:jit:style:src/app/register/register.css"() {
    register_default2 = "/* src/app/register/register.css */\n/*# sourceMappingURL=register.css.map */\n";
  }
});

// src/app/register/register.ts
var Register;
var init_register3 = __esm({
  "src/app/register/register.ts"() {
    "use strict";
    init_tslib_es6();
    init_register();
    init_register2();
    init_core();
    init_forms();
    init_forms();
    init_router();
    init_auth();
    init_ngx_cookie_service();
    init_ngx_toastr();
    init_emailValidator();
    init_common();
    Register = class Register2 {
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
        name: new FormControl("", {
          validators: [Validators.required, Validators.minLength(4)]
        }),
        email: new FormControl("", {
          validators: [Validators.required, EmailDomainValidator(this.allowedDomain)]
        }),
        password: new FormControl("", {
          validators: [Validators.required, Validators.minLength(6)]
        }),
        contactNo: new FormControl("", {
          validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]
        })
      });
      onSubmit() {
        const formData = this.empForm.value;
        this.authSevice.register(formData).subscribe({
          next: (res) => {
            this.toasterService.success("Student Register Successfuly", "Success");
            this.router.navigate(["/dashboard"]);
          },
          error: (err) => {
            console.error("Login error", err);
            const errorMsg = typeof err.error === "string" ? err.error : err.error?.message || "Something went wrong";
            this.toasterService.error("User Alredy Exist", "Failed");
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
    Register = __decorate([
      Component({
        selector: "app-register",
        imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
        template: register_default,
        styles: [register_default2]
      })
    ], Register);
  }
});

// src/app/register/register.spec.ts
var require_register_spec = __commonJS({
  "src/app/register/register.spec.ts"(exports) {
    init_testing();
    init_register3();
    describe("Register", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Register]
        }).compileComponents();
        fixture = TestBed.createComponent(Register);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_register_spec();
//# sourceMappingURL=spec-app-register-register.spec.js.map
