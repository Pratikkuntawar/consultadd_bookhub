import {
  SignupComponent,
  init_signup
} from "./chunk-LLLWFLHG.js";
import {
  LoginComponent,
  init_login
} from "./chunk-J6XW6LVX.js";
import {
  AuthService,
  init_auth
} from "./chunk-KQYFARAI.js";
import "./chunk-M22DLADB.js";
import {
  Router,
  init_router
} from "./chunk-CDNPHVEI.js";
import "./chunk-CZVOOQAL.js";
import "./chunk-7OUSRNRQ.js";
import "./chunk-5ZJVNJSG.js";
import {
  CommonModule,
  init_common
} from "./chunk-AMQQJ5OH.js";
import "./chunk-XENIYTW7.js";
import "./chunk-BYESBSSC.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-CBUZ25KJ.js";
import {
  __async,
  __commonJS,
  __esm
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
    init_signup();
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
