import {
  AuthService,
  init_auth
} from "./chunk-H7LPNIAL.js";
import {
  LoginComponent,
  init_login
} from "./chunk-6GNUQ4VV.js";
import {
  require_sweetalert2_all
} from "./chunk-M22DLADB.js";
import {
  Router,
  init_router
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
  init_http
} from "./chunk-FWZLS6EV.js";
import "./chunk-BYESBSSC.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-NB5YZKJW.js";
import {
  __async,
  __commonJS,
  __esm,
  __toESM
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/home/home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src/app/home/home.html"() {
    home_default = `
<nav class="navbar navbar-expand-lg navbar-light px-4" style="background-color: #1a1a1a; color: #ffffff">
  <a class="navbar-brand" href="#">
    <img src="/Consultadd_Logo.png" alt="Logo" width="250" height="60">
  </a>

  <button class="navbar-toggler" type="button" (click)="toggleMenu()">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Signup button for small devices -->
  <div class="d-lg-none ms-auto">
    <button class="btn btn-primary my-2" type="button" (click)="onSignupClick()">Signup</button>
  </div>

  <div class="collapse navbar-collapse" [ngClass]="{ 'show': isMenuOpen }" id="navbarContent">
    <ul class="navbar-nav mx-auto align-items-center">
      <!-- <li class="nav-item">
        <a class="nav-link text-light" routerLink="/">Home</a>
      </li> -->
      <!-- <li class="nav-item ms-3">
        <a class="nav-link text-light" routerLink="/allbooks">All Books</a>
      </li> -->
      <!-- <li class="nav-item ms-3" (click)="navigateToBooks()" style="cursor: pointer;">
  <span class="nav-link text-light">All Books</span>
</li> -->

    </ul>

    <!-- Show Signup if not logged in -->
    <button *ngIf="!authService.isLoggedIn" class="btn btn-success" (click)="onSignupClick()">Signup</button>

    <!-- Show Profile and Cart if logged in -->
  </div>
</nav>

<!-- Unauthorized Modal -->


<!-- Signup Modal -->
<app-signup *ngIf="showSignupModal" (switchToLogin)="openLoginModal()" (close)="closeSignupModal()"></app-signup>

<!-- Login Modal -->
<app-login *ngIf="showLoginModal" (close)="closeLoginModal()"></app-login>

<!-- Home Page Content -->
<div class="home-container" style="background-color: #000000; color: #ffffff; height: 100vh;">
  <div class="home-left-content">
    <h1 class="home-title text-6xl font-semibold text-yellow-100" style="color:#fef9c3">
      Welcome to BookStore
    </h1>
    <p class="home-description text-xl" style="color:#d4d4d8">
      Your one-stop destination to explore, discover, and fall in love with books from every genre. Curated collections, trending titles, and handpicked recommendations await you.
    </p>
    <small class="home-quote text-xl" style="color:#d4d4d8">
      \u201CA room without books is like a body without a soul.\u201D
    </small>
    <br />
    <!-- <button class="home-button mt-4 explore-button" (click)="movetoAllBooks()">
      Start Exploring
    </button> -->
  </div>
  <div class="home-right">
    <img src="/finger.png" alt="Hero" />
  </div>
</div>
`;
  }
});

// angular:jit:style:src/app/home/home.css
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src/app/home/home.css"() {
    home_default2 = "/* src/app/home/home.css */\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n  position: relative;\n  overflow: hidden;\n}\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n}\n.home-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.home-left h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #343a40;\n}\n.home-left p {\n  font-size: 1.5rem;\n  color: #6c757d;\n}\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n  position: relative;\n  overflow: hidden;\n}\n.home-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 2;\n}\n.home-left h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #343a40;\n}\n.home-left p {\n  font-size: 1.5rem;\n  color: #6c757d;\n}\n.home-left-content {\n  padding-top: 60px;\n  padding-left: 30px;\n  padding-right: 30px;\n  text-align: left;\n  margin-top: 100px;\n  transform: translateY(-100px);\n}\n.home-title {\n  font-size: 3.2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 1rem;\n}\n.home-description {\n  font-size: 1.2rem;\n  color: #4b5563;\n  line-height: 1.7;\n  max-width: 500px;\n  margin-bottom: 1.5rem;\n}\n.home-quote {\n  font-style: italic;\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.home-button {\n  padding: 12px 24px;\n  font-size: 1rem;\n  border-radius: 8px;\n  background-color: #4f46e5;\n  border: none;\n  transition: all 0.3s ease;\n}\n.home-button:hover {\n  background-color: #4338ca;\n}\n.home-right {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding-top: 40px;\n  padding-right: 20px;\n  z-index: 1;\n}\n.home-right img {\n  max-width: 90%;\n  height: auto;\n  max-height: 80vh;\n  transform: translateY(-80px);\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #facc15;\n}\n.explore-button {\n  background-color: #d90429;\n  color: #ffffff;\n  border: none;\n  padding: 12px 24px;\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 4px 12px rgba(217, 4, 41, 0.4);\n}\n.explore-button:hover {\n  background-color: #a00322;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(217, 4, 41, 0.6);\n}\n@media (max-width: 768px) {\n  .home-container {\n    flex-direction: column;\n    height: auto;\n    padding: 1.5rem;\n    text-align: center;\n  }\n  .home-left-content,\n  .home-right {\n    width: 100%;\n    padding: 1rem;\n  }\n  .home-title {\n    font-size: 1.5rem;\n  }\n  .home-description,\n  .home-quote {\n    font-size: 1rem;\n  }\n  .home-right img {\n    max-width: 80%;\n    margin-top: 1rem;\n  }\n  .home-button {\n    text-align: center;\n  }\n  .home-left-content {\n    padding-top: 60px;\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: left;\n    margin-top: 100px;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=home.css.map */\n";
  }
});

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
var import_sweetalert2, SignupComponent;
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
    import_sweetalert2 = __toESM(require_sweetalert2_all());
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
      //   registerUser() {
      //     const apiUrl = 'http://localhost:8080/consultadd/auth/register'; // ✅ Replace with your backend endpoint
      //     this.http.post(apiUrl, this.signupData).subscribe({
      //       next: (response) => {
      //         console.log('Registration successful:', response);
      //         // alert('Registered successfully!');
      //         Swal.fire({
      //   icon: 'success',
      //   title: 'Success!',
      //   text: 'Regiter successfully.',
      // });
      //         //this.moveToLoginRoute();
      //         this.router.navigate(['/login']);
      //       },
      //       error: (error) => {
      //         console.error('Registration failed:', error);
      //          alert('Registration failed. Please try again.');
      //       }
      //     });
      //   }
      // registerUser() {
      //   const apiUrl = 'http://localhost:8080/consultadd/auth/register';
      //   this.http.post(apiUrl, this.signupData).subscribe({
      //     next: (response) => {
      //       console.log('Registration successful:', response);
      //       // Show success alert, then navigate to login page
      //       Swal.fire({
      //         icon: 'success',
      //         title: 'Success!',
      //         text: 'Registered successfully.',
      //       }).then((result) => {
      //         if (result.isConfirmed) {
      //           this.router.navigate(['/login']);
      //         }
      //       });
      //     },
      //     error: (error) => {
      //       console.error('Registration failed:', error);
      //       Swal.fire({
      //         icon: 'error',
      //         title: 'Registration Failed',
      //         text: 'Please try again.',
      //       });
      //     }
      //   });
      // }
      registerUser() {
        const apiUrl = "http://localhost:8080/consultadd/auth/register";
        this.http.post(apiUrl, this.signupData).subscribe({
          next: (response) => {
            console.log("Registration successful:", response);
            import_sweetalert2.default.fire({
              icon: "success",
              title: "Success!",
              text: "Registered successfully.",
              timer: 2e3,
              showConfirmButton: false,
              timerProgressBar: true
            }).then(() => {
              this.router.navigate(["/login"]);
            });
          },
          error: (error) => {
            console.error("Registration failed:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: "Registration Failed",
              text: "Please try again.",
              timer: 2e3,
              showConfirmButton: false,
              timerProgressBar: true
            });
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

// src/app/home/home.ts
var Home;
var init_home3 = __esm({
  "src/app/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    init_common();
    init_router();
    init_signup3();
    init_login();
    init_auth();
    Home = class Home2 {
      authService;
      router;
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }
      isMenuOpen = false;
      showUnauthorized = false;
      showSignupModal = false;
      showLoginModal = false;
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
      onSignupClick() {
        this.router.navigate(["/signup"]);
      }
      openSignupModal() {
        this.showSignupModal = true;
        this.showLoginModal = false;
      }
      openLoginModal() {
        this.showLoginModal = true;
        this.showSignupModal = false;
      }
      closeSignupModal() {
        this.showSignupModal = false;
      }
      closeLoginModal() {
        this.showLoginModal = false;
      }
      handleProtectedRoute(event) {
        event.preventDefault();
        this.showUnauthorized = true;
      }
      closeUnauthorized() {
        this.showUnauthorized = false;
      }
      onLogout() {
        this.authService.logout();
      }
      movetoAllBooks() {
        this.router.navigate(["/allbooks"]);
      }
      navigateToBooks() {
        this.router.navigate(["/allbooks"]);
      }
      static ctorParameters = () => [
        { type: AuthService },
        { type: Router }
      ];
    };
    Home = __decorate([
      Component({
        selector: "app-home",
        standalone: true,
        imports: [CommonModule, SignupComponent, LoginComponent],
        template: home_default,
        styles: [home_default2]
      })
    ], Home);
  }
});

// src/app/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-app-home-home.spec.js.map
