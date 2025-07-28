import {
  FormsModule,
  init_forms
} from "./chunk-7LRCIF4P.js";
import {
  HttpClient,
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
  __esm
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/getalldonations/getalldonations.html
var getalldonations_default;
var init_getalldonations = __esm({
  "angular:jit:template:src/app/getalldonations/getalldonations.html"() {
    getalldonations_default = '<div class="home-container">\n  <div *ngFor="let donation of donations" class="user-card">\n    <img src="/books.webp" alt="User" class="user-image">\n    <div class="user-details">\n      <h5>Book Title : {{ donation.title }}</h5>\n      <p>\u{1F9D1}\u200D\u{1F4BC}Donation ID:{{donation.id}}</p>\n      <p>\u{1F4E7} Author: {{donation.author}}</p>\n      <p>\u{1F4F1} PDF Url: {{donation.pdfUrl }}</p>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Image Url: {{donation.imageUrl}}</p>\n      <p>Status:{{donation.status}}</p>\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/getalldonations/getalldonations.css
var getalldonations_default2;
var init_getalldonations2 = __esm({
  "angular:jit:style:src/app/getalldonations/getalldonations.css"() {
    getalldonations_default2 = "/* src/app/getalldonations/getalldonations.css */\nbody,\n.home-container {\n  background-color: #000000;\n  min-height: 100vh;\n  padding: 1rem;\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-details h5 {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n}\n.user-details p {\n  margin: 2px 0;\n}\n.user-card {\n  gap: 50px;\n}\n/*# sourceMappingURL=getalldonations.css.map */\n";
  }
});

// src/app/getalldonations/getalldonations.ts
var Getalldonations;
var init_getalldonations3 = __esm({
  "src/app/getalldonations/getalldonations.ts"() {
    "use strict";
    init_tslib_es6();
    init_getalldonations();
    init_getalldonations2();
    init_common();
    init_core();
    init_http();
    init_forms();
    Getalldonations = class Getalldonations2 {
      http;
      donations = [];
      constructor(http) {
        this.http = http;
      }
      ngOnInit() {
        this.fetchDonations();
      }
      // fetchDonations(): void {
      //   const apiUrl = 'http://localhost:8080/api/donations/';
      //   this.http.get<any[]>(apiUrl).subscribe({
      //     next: (response) => {
      //       this.donations = response;
      //       console.log('All Donations:', this.donations);
      //     },
      //     error: (error) => {
      //       console.error('Error fetching donations:', error);
      //     }
      //   });
      // }
      fetchDonations() {
        const apiUrl = "http://localhost:8080/api/donations/";
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("JWT token not found");
          return;
        }
        const headers = {
          Authorization: `Bearer ${token}`
        };
        this.http.get(apiUrl, { headers }).subscribe({
          next: (response) => {
            this.donations = response;
            console.log("All Donations:", this.donations);
          },
          error: (error) => {
            console.error("Error fetching donations:", error);
          }
        });
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Getalldonations = __decorate([
      Component({
        selector: "app-getalldonations",
        standalone: true,
        imports: [FormsModule, CommonModule],
        template: getalldonations_default,
        styles: [getalldonations_default2]
      })
    ], Getalldonations);
  }
});

// src/app/getalldonations/getalldonations.spec.ts
var require_getalldonations_spec = __commonJS({
  "src/app/getalldonations/getalldonations.spec.ts"(exports) {
    init_testing();
    init_getalldonations3();
    describe("Getalldonations", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Getalldonations]
        }).compileComponents();
        fixture = TestBed.createComponent(Getalldonations);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_getalldonations_spec();
//# sourceMappingURL=spec-app-getalldonations-getalldonations.spec.js.map
