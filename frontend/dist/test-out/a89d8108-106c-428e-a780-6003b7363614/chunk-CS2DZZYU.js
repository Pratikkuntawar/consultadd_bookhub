import {
  require_sweetalert2_all
} from "./chunk-M22DLADB.js";
import {
  FormsModule,
  init_forms
} from "./chunk-5ZJVNJSG.js";
import {
  Router,
  init_router
} from "./chunk-CDNPHVEI.js";
import {
  CommonModule,
  init_common
} from "./chunk-AMQQJ5OH.js";
import {
  HttpClient,
  init_http
} from "./chunk-XENIYTW7.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-CBUZ25KJ.js";
import {
  __esm,
  __toESM
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/login/login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src/app/login/login.html"() {
    login_default = '<!-- \n<div class="modal-backdrop show">\n  <div class="modal d-block" tabindex="-1">\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content custom-login-modal text-center p-4">\n        <h5 class="modal-title text-black mb-3">Login</h5>\n        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">\n          <input\n            type="email"\n            class="form-control mb-3 dark-input"\n            placeholder="Enter Email"\n            name="email"\n            [(ngModel)]="loginData.email"\n            required\n          />\n          <input\n            type="password"\n            class="form-control mb-3 dark-input"\n            placeholder="Enter Password"\n            name="password"\n            [(ngModel)]="loginData.password"\n            required\n          />\n          <button\n            type="submit"\n            class="btn btn-primary fw-bold"\n            [disabled]="!loginForm.form.valid"\n          >\n            Login\n          </button>\n          <button\n            type="button"\n            class="btn btn-danger ms-2 fw-bold"\n            (click)="handleClose()"\n          >\n            Close\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n\n\n<div class="modal-backdrop show">\n  <div class="modal d-block" tabindex="-1">\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content custom-login-modal text-center p-4 bg-white">\n        <h5 class="modal-title text-black mb-3">Login</h5>\n        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">\n          <!-- Email -->\n          <input\n            type="email"\n            name="email"\n            [(ngModel)]="loginData.email"\n            required\n            pattern="^[a-zA-Z0-9._%+-]+@consultadd\\.com$"\n            #emailRef="ngModel"\n            class="form-control mb-1"\n            placeholder="Enter your Consultadd email"\n          />\n          <small class="text-danger" *ngIf="emailRef.invalid && emailRef.touched">\n            Valid Consultadd email is required \n          </small>\n\n          <!-- Password -->\n          <input\n            type="password"\n            name="password"\n            [(ngModel)]="loginData.password"\n            required\n            minlength="6"\n            #passwordRef="ngModel"\n            class="form-control mb-1 mt-3"\n            placeholder="Enter password (min 8 chars)"\n          />\n          <small class="text-danger" *ngIf="passwordRef.invalid && passwordRef.touched">\n            Password must be at least 8 characters\n          </small>\n\n          <!-- Buttons -->\n          <div class="mt-4">\n            <button\n              type="submit"\n              class="btn btn-primary fw-bold"\n              [disabled]="!loginForm.valid"\n            >\n              Login\n            </button>\n            <button\n              type="button"\n              class="btn btn-danger ms-2 fw-bold"\n              (click)="handleClose()"\n            >\n              Close\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/login/login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src/app/login/login.css"() {
    login_default2 = "/* src/app/login/login.css */\n.modal-backdrop.show {\n  background-color: rgba(0, 0, 0, 0.85);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1040;\n}\n.modal-content.custom-login-modal {\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);\n  max-width: 400px;\n  margin: auto;\n  padding: 30px 25px;\n  border: none;\n}\n.dark-input {\n  background-color: #f9f9f9;\n  border: 1px solid #ccc;\n  color: #333;\n}\n.dark-input::placeholder {\n  color: #999;\n}\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/login/login.ts
var import_sweetalert2, LoginComponent;
var init_login3 = __esm({
  "src/app/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_common();
    init_http();
    init_core();
    init_forms();
    init_router();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    LoginComponent = class LoginComponent2 {
      http;
      router;
      // @Output() close = new EventEmitter<void>();
      // handleClose() {
      //   this.close.emit();
      // }
      // above code is of earlier 
      // @Output() close = new EventEmitter<void>();
      loginData = {
        email: "",
        password: ""
      };
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }
      // onSubmit() {
      //   this.http.post<any>('http://localhost:8080/consultadd/auth/login', this.loginData).subscribe({
      //     next: (res) => {
      //       console.log('Login success', res);
      //       // Save data to local storage
      //       localStorage.setItem('token', res.token);
      //       localStorage.setItem('role', res.role);
      //       localStorage.setItem('employeeId', res.employeeId);
      //       // alert('Login successful');
      //         Swal.fire({
      //   icon: 'success',
      //   title: 'Success!',
      //   text: 'Regiter successfully.',
      // });
      //       // Role-based navigation
      //       if (res.role === 'SELLER') {
      //         this.router.navigate(['/seller-dashboard']);
      //       } else if (res.role === 'BUYER') {
      //         this.router.navigate(['/buyer-dashboard']);
      //       } else if (res.role === 'ADMIN') {
      //         this.router.navigate(['/admin-dashboard']);
      //       } else {
      //         alert('Unknown role');
      //         this.router.navigate(['/']);
      //       }
      //       // ❌ Remove this line
      //       // this.handleClose(); 
      //     },
      //     error: (err) => {
      //       console.error('Login failed', err);
      //       alert('Login failed. Please check your credentials.');
      //     },
      //   });
      // }
      // onSubmit() {
      //   this.http.post<any>('http://localhost:8080/consultadd/auth/login', this.loginData).subscribe({
      //     next: (res) => {
      //       console.log('Login success', res);
      //       // Save data to local storage
      //       localStorage.setItem('token', res.token);
      //       localStorage.setItem('role', res.role);
      //       localStorage.setItem('employeeId', res.employeeId);
      //       // Show success popup and then redirect based on role
      //       Swal.fire({
      //         icon: 'success',
      //         title: 'Success!',
      //         text: 'Login successful.',
      //       }).then((result) => {
      //         if (result.isConfirmed) {
      //           // Role-based navigation
      //           if (res.role === 'SELLER') {
      //             this.router.navigate(['/seller-dashboard']);
      //           } else if (res.role === 'BUYER') {
      //             this.router.navigate(['/buyer-dashboard']);
      //           } else if (res.role === 'ADMIN') {
      //             this.router.navigate(['/admin-dashboard']);
      //           } else {
      //             alert('Unknown role');
      //             this.router.navigate(['/']);
      //           }
      //         }
      //       });
      //     },
      //     error: (err) => {
      //       console.error('Login failed', err);
      //       Swal.fire({
      //         icon: 'error',
      //         title: 'Login Failed',
      //         text: 'Please check your credentials and try again.',
      //       });
      //     },
      //   });
      // }
      onSubmit() {
        this.http.post("http://localhost:8080/consultadd/auth/login", this.loginData).subscribe({
          next: (res) => {
            console.log("Login success", res);
            localStorage.setItem("token", res.token);
            localStorage.setItem("role", res.role);
            localStorage.setItem("employeeId", res.employeeId);
            import_sweetalert2.default.fire({
              icon: "success",
              title: "Success!",
              text: "Login successful.",
              timer: 2e3,
              showConfirmButton: false,
              timerProgressBar: true
            }).then(() => {
              if (res.role === "SELLER") {
                this.router.navigate(["/seller-dashboard"]);
              } else if (res.role === "BUYER") {
                this.router.navigate(["/buyer-dashboard"]);
              } else if (res.role === "ADMIN") {
                this.router.navigate(["/admin-dashboard"]);
              } else {
                alert("Unknown role");
                this.router.navigate(["/"]);
              }
            });
          },
          error: (err) => {
            console.error("Login failed", err);
            import_sweetalert2.default.fire({
              icon: "error",
              title: "Login Failed",
              text: "Please check your credentials and try again.",
              timer: 2e3,
              showConfirmButton: false,
              timerProgressBar: true
            });
          }
        });
      }
      handleClose() {
        this.router.navigate(["/"]);
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router }
      ];
    };
    LoginComponent = __decorate([
      Component({
        selector: "app-login",
        imports: [FormsModule, CommonModule],
        template: login_default,
        styles: [login_default2]
      })
    ], LoginComponent);
  }
});

export {
  LoginComponent,
  init_login3 as init_login
};
//# sourceMappingURL=chunk-CS2DZZYU.js.map
