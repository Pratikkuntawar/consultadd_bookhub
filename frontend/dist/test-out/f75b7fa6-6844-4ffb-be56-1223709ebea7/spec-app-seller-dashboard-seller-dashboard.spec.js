import {
  Router,
  init_router
} from "./chunk-V7S46CQ4.js";
import "./chunk-E776C4KC.js";
import "./chunk-SG2WTSSV.js";
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
  HttpClientModule,
  init_http
} from "./chunk-CSZOH65J.js";
import "./chunk-56AEGESF.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-55HYZWLT.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-V6FC2DIM.js";

// angular:jit:template:src/app/seller-dashboard/seller-dashboard.html
var seller_dashboard_default;
var init_seller_dashboard = __esm({
  "angular:jit:template:src/app/seller-dashboard/seller-dashboard.html"() {
    seller_dashboard_default = `<nav class="navbar navbar-expand-lg navbar-dark px-4" style="background-color: #1a1a1a;">
  <!-- <a class="navbar-brand text-white" href="#">
    Seller Dashboard
  </a> -->
  <a class="navbar-brand" href="#">
    <img src="/Consultadd_Logo.png" alt="Logo" width="250" height="60">
  </a>
  <button class="navbar-toggler" type="button" (click)="toggleMenu()">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" [ngClass]="{ 'show': isMenuOpen }" id="adminNavbar">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item mx-2">
        <a class="nav-link text-light" (click)="addbook()">Upload Books</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/book-management" (click)="updatebook()">Update Book</a>
      </li>
            <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/book-requests" (click)="donatebook()">Donate Book</a>
      </li>
      <!-- <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/donations" routerLinkActive="active">Track Sales</a>
      </li> -->
      <!-- <li class="nav-item mx-2">
        <a class="nav-link text-light" routerLink="/admin/book-requests" routerLinkActive="active">Donations</a>
      </li> -->
       <li class="nav-item dropdown mx-2">
  <a
    class="nav-link dropdown-toggle text-light"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Donations
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetoviewalldonations()">Get All Donations</a>
    </li>
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetoupdatedonations()">Update Donation status</a>
    </li>
  </ul>
</li>

      <li class="nav-item dropdown mx-2">
  <a
    class="nav-link dropdown-toggle text-light"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Book Request
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetoviewallbookrequest()">Get All Book Request</a>
    </li>
    <li>
      <a class="dropdown-item" style="cursor: pointer;" (click)="movetoupdatebookrequest()">Update Book Status</a>
    </li>
  </ul>
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
      Welcome to the Seller Dashboard
    </h1>
    <p class="home-description text-xl" style="color:#d4d4d8">
      Manage your book listings, track sales, update inventory, and grow your business. This is your personal control center for everything you need as a seller.
    </p>
    <!-- <small class="home-quote text-xl" style="color:#d4d4d8">
      \u201CLeadership is not about being in charge. It\u2019s about taking care of those in your charge.\u201D
    </small> -->
    <br />
    <button class="home-button mt-4 explore-button" (click)="addbook()">
      Add New Book
    </button>
  </div>
  <div class="home-right">
    <img src="/businessman.png" alt="Seller Panel Illustration" />
  </div>
</div>
`;
  }
});

// angular:jit:style:src/app/seller-dashboard/seller-dashboard.css
var seller_dashboard_default2;
var init_seller_dashboard2 = __esm({
  "angular:jit:style:src/app/seller-dashboard/seller-dashboard.css"() {
    seller_dashboard_default2 = "/* src/app/seller-dashboard/seller-dashboard.css */\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n  position: relative;\n  overflow: hidden;\n}\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n}\n.home-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.home-left h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #343a40;\n}\n.home-left p {\n  font-size: 1.5rem;\n  color: #6c757d;\n}\n.home-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5%;\n  background-color: #f8f9fa;\n  position: relative;\n  overflow: hidden;\n}\n.home-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 2;\n}\n.home-left h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #343a40;\n}\n.home-left p {\n  font-size: 1.5rem;\n  color: #6c757d;\n}\n.home-left-content {\n  padding-top: 60px;\n  padding-left: 30px;\n  padding-right: 30px;\n  text-align: left;\n  margin-top: 100px;\n  transform: translateY(-120px);\n}\n.home-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 1rem;\n}\n.home-description {\n  font-size: 1.2rem;\n  color: #4b5563;\n  line-height: 1.7;\n  max-width: 500px;\n  margin-bottom: 1.5rem;\n}\n.home-quote {\n  font-style: italic;\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.home-button {\n  padding: 12px 24px;\n  font-size: 1rem;\n  border-radius: 8px;\n  background-color: #4f46e5;\n  border: none;\n  transition: all 0.3s ease;\n}\n.home-button:hover {\n  background-color: #4338ca;\n}\n.home-right {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding-top: 40px;\n  padding-right: 20px;\n  z-index: 1;\n}\n.home-right img {\n  max-width: 90%;\n  height: auto;\n  max-height: 80vh;\n  transform: translateY(-80px);\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #facc15;\n}\n.explore-button {\n  background-color: #d90429;\n  color: #ffffff;\n  border: none;\n  padding: 12px 24px;\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 4px 12px rgba(217, 4, 41, 0.4);\n}\n.explore-button:hover {\n  background-color: #a00322;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(217, 4, 41, 0.6);\n}\n@media (max-width: 768px) {\n  .home-container {\n    flex-direction: column;\n    height: auto;\n    padding: 1.5rem;\n    text-align: center;\n  }\n  .home-left-content,\n  .home-right {\n    width: 100%;\n    padding: 1rem;\n  }\n  .home-title {\n    font-size: 1.5rem;\n  }\n  .home-description,\n  .home-quote {\n    font-size: 1rem;\n  }\n  .home-right img {\n    max-width: 80%;\n    margin-top: 1rem;\n  }\n  .home-button {\n    text-align: center;\n  }\n  .home-left-content {\n    padding-top: 60px;\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: left;\n    margin-top: 100px;\n    transform: translateY(-100px);\n  }\n}\n.nav-link {\n  transition: transform 0.1s ease-in-out, background-color 0.2s;\n  padding: 8px 16px;\n  border-radius: 6px;\n}\n.nav-link:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.nav-link:active {\n  transform: scale(0.95);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n/*# sourceMappingURL=seller-dashboard.css.map */\n";
  }
});

// src/app/seller-dashboard/seller-dashboard.ts
var SellerDashboard;
var init_seller_dashboard3 = __esm({
  "src/app/seller-dashboard/seller-dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_seller_dashboard();
    init_seller_dashboard2();
    init_common();
    init_http();
    init_core();
    init_forms();
    init_router();
    SellerDashboard = class SellerDashboard2 {
      http;
      router;
      isMenuOpen = false;
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }
      addbook() {
        this.router.navigate(["/addBook"]);
      }
      movetoviewalldonations() {
        this.router.navigate(["/admin-getalldonations"]);
      }
      movetoupdatedonations() {
        this.router.navigate(["/admin-updatedonations"]);
      }
      movetoviewallbookrequest() {
        this.router.navigate(["/admin-movetoviewallbookrequest"]);
      }
      movetoupdatebookrequest() {
        this.router.navigate(["/admin-movetoupdatebookrequest"]);
      }
      donatebook() {
        this.router.navigate(["/donatebook"]);
      }
      updatebook() {
        this.router.navigate(["/updateBook"]);
      }
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
      onLogout() {
        console.log("Seller Logged Out");
        alert("Seller Logged Out");
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("employeeId");
        this.router.navigate(["/"]);
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router }
      ];
    };
    SellerDashboard = __decorate([
      Component({
        selector: "app-admin-dashboard",
        imports: [FormsModule, CommonModule, HttpClientModule],
        template: seller_dashboard_default,
        styles: [seller_dashboard_default2]
      })
    ], SellerDashboard);
  }
});

// src/app/seller-dashboard/seller-dashboard.spec.ts
var require_seller_dashboard_spec = __commonJS({
  "src/app/seller-dashboard/seller-dashboard.spec.ts"(exports) {
    init_testing();
    init_seller_dashboard3();
    describe("SellerDashboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [SellerDashboard]
        }).compileComponents();
        fixture = TestBed.createComponent(SellerDashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_seller_dashboard_spec();
//# sourceMappingURL=spec-app-seller-dashboard-seller-dashboard.spec.js.map
