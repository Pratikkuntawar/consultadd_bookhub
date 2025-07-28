import {
  require_sweetalert2_all
} from "./chunk-M22DLADB.js";
import {
  Router,
  init_router
} from "./chunk-UEHRZZES.js";
import "./chunk-4H22UJ5Z.js";
import {
  FormsModule,
  init_forms
} from "./chunk-7LRCIF4P.js";
import {
  HttpClient,
  HttpClientModule,
  init_http
} from "./chunk-6FYC6G7U.js";
import {
  CommonModule,
  Component,
  TestBed,
  __decorate,
  init_common,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-LYKWNGON.js";
import {
  __async,
  __commonJS,
  __esm,
  __toESM
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/buyer-dashboard/buyer-dashboard.html
var buyer_dashboard_default;
var init_buyer_dashboard = __esm({
  "angular:jit:template:src/app/buyer-dashboard/buyer-dashboard.html"() {
    buyer_dashboard_default = `<nav class="navbar navbar-expand-lg navbar-dark px-4" style="background-color: #1a1a1a;">

  <a class="navbar-brand" href="#">
    <img src="/Consultadd_Logo.png" alt="Logo" width="250" height="60">
  </a>
  <button class="navbar-toggler" type="button" (click)="toggleMenu()">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" [ngClass]="{ 'show': isMenuOpen }" id="adminNavbar">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/view" (click)="browsebooks()">Browse Books</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/book-management" (click)="viewcart()">View Cart<img  class="cart" src="/shopping-cart (1).png"/></a>
      </li>

      <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/book-requests" (click)="requestbook()">Request Books</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/book-requests" (click)="donatebook()">Donate Book</a>
      </li>
    </ul>

    <!-- Optional logout -->
    <button class="btn btn-danger" (click)="onLogout()">Logout</button>
  </div>
</nav>

<!-- Admin Dashboard Content -->
<div class="home-container" style="background-color: #000000; color: #ffffff; height: 100vh;">
  <div class="home-left-content">
    <h1 class="home-title text-6xl font-semibold text-yellow-100" style="color:#fef9c3">
      Welcome to the Buyer Dashboard
    </h1>
    <p class="home-description text-xl" style="color:#d4d4d8">
      Explore your favorite books, view order history, manage your wishlist, and enjoy a seamless shopping experience. This is your personalized space for everything you need as a reader.
    </p>
    <br />
    <button class="home-button mt-4 explore-button" (click)="browseallbooks()">
      Buy New Book
    </button>
  </div>
  <div class="home-right">
    <img src="/seller.png" alt="Buyer Illustration" />
  </div>
</div>

`;
  }
});

// angular:jit:style:src/app/buyer-dashboard/buyer-dashboard.css
var buyer_dashboard_default2;
var init_buyer_dashboard2 = __esm({
  "angular:jit:style:src/app/buyer-dashboard/buyer-dashboard.css"() {
    buyer_dashboard_default2 = "/* src/app/buyer-dashboard/buyer-dashboard.css */\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n  position: relative;\n  overflow: hidden;\n}\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n}\n.home-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.home-left h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #343a40;\n}\n.home-left p {\n  font-size: 1.5rem;\n  color: #6c757d;\n}\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n  position: relative;\n  overflow: hidden;\n}\n.home-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 2;\n}\n.home-left h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #343a40;\n}\n.home-left p {\n  font-size: 1.5rem;\n  color: #6c757d;\n}\n.home-left-content {\n  padding-top: 60px;\n  padding-left: 30px;\n  padding-right: 30px;\n  text-align: left;\n  margin-top: 100px;\n  transform: translateY(-120px);\n}\n.home-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 1rem;\n}\n.home-description {\n  font-size: 1.2rem;\n  color: #4b5563;\n  line-height: 1.7;\n  max-width: 500px;\n  margin-bottom: 1.5rem;\n}\n.home-quote {\n  font-style: italic;\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.home-button {\n  padding: 12px 24px;\n  font-size: 1rem;\n  border-radius: 8px;\n  background-color: #4f46e5;\n  border: none;\n  transition: all 0.3s ease;\n}\n.home-button:hover {\n  background-color: #4338ca;\n}\n.home-right {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding-top: 40px;\n  padding-right: 20px;\n  z-index: 1;\n}\n.home-right img {\n  max-width: 90%;\n  height: auto;\n  max-height: 80vh;\n  transform: translateY(-80px);\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #facc15;\n}\n.explore-button {\n  background-color: #d90429;\n  color: #ffffff;\n  border: none;\n  padding: 12px 24px;\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 4px 12px rgba(217, 4, 41, 0.4);\n}\n.explore-button:hover {\n  background-color: #a00322;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(217, 4, 41, 0.6);\n}\n@media (max-width: 768px) {\n  .home-container {\n    flex-direction: column;\n    height: auto;\n    padding: 1.5rem;\n    text-align: center;\n  }\n  .home-left-content,\n  .home-right {\n    width: 100%;\n    padding: 1rem;\n  }\n  .home-title {\n    font-size: 1.5rem;\n  }\n  .home-description,\n  .home-quote {\n    font-size: 1rem;\n  }\n  .home-right img {\n    max-width: 80%;\n    margin-top: 1rem;\n  }\n  .home-button {\n    text-align: center;\n  }\n  .home-left-content {\n    padding-top: 60px;\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: left;\n    margin-top: 100px;\n    transform: translateY(-100px);\n  }\n}\n.nav-link {\n  transition: transform 0.1s ease-in-out, background-color 0.2s;\n  padding: 8px 16px;\n  border-radius: 6px;\n}\n.nav-link:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-link:active {\n  transform: scale(0.95);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.cart {\n  width: 20px;\n  height: 20px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=buyer-dashboard.css.map */\n";
  }
});

// src/app/buyer-dashboard/buyer-dashboard.ts
var import_sweetalert2, BuyerDashboard;
var init_buyer_dashboard3 = __esm({
  "src/app/buyer-dashboard/buyer-dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_buyer_dashboard();
    init_buyer_dashboard2();
    init_common();
    init_http();
    init_core();
    init_forms();
    init_router();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    BuyerDashboard = class BuyerDashboard2 {
      http;
      router;
      isMenuOpen = false;
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }
      browseallbooks() {
        this.router.navigate(["/browsebooks"]);
      }
      requestbook() {
        this.router.navigate(["/bookrequest"]);
      }
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
      browsebooks() {
        console.log("Move to all books section");
        this.router.navigate(["/browsebooks"]);
      }
      viewcart() {
        this.router.navigate(["/viewcart"]);
      }
      donatebook() {
        this.router.navigate(["/donatebook"]);
      }
      // onLogout() {
      //   // Replace with actual auth service logout if needed
      //   console.log('Buyer Logged Out');
      //   alert('Buyer Has Been Logged Out');
      // localStorage.removeItem('token');
      // localStorage.removeItem('role');
      // localStorage.removeItem('employeeId');
      //   this.router.navigate(['/']);
      // }
      onLogout() {
        console.log("Admin Logged Out");
        import_sweetalert2.default.fire({
          icon: "success",
          title: "Logged Out",
          text: "\u{1F44B} You have been logged out successfully.",
          confirmButtonColor: "#3085d6",
          timer: 2e3,
          showConfirmButton: false
        }).then(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("employeeId");
          this.router.navigate(["/"]);
        });
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router }
      ];
    };
    BuyerDashboard = __decorate([
      Component({
        selector: "app-buyer-dashboard",
        imports: [FormsModule, CommonModule, HttpClientModule],
        template: buyer_dashboard_default,
        styles: [buyer_dashboard_default2]
      })
    ], BuyerDashboard);
  }
});

// src/app/buyer-dashboard/buyer-dashboard.spec.ts
var require_buyer_dashboard_spec = __commonJS({
  "src/app/buyer-dashboard/buyer-dashboard.spec.ts"(exports) {
    init_testing();
    init_buyer_dashboard3();
    describe("BuyerDashboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [BuyerDashboard]
        }).compileComponents();
        fixture = TestBed.createComponent(BuyerDashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_buyer_dashboard_spec();
//# sourceMappingURL=spec-app-buyer-dashboard-buyer-dashboard.spec.js.map
