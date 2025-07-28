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
  HttpHeaders,
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
  __esm
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/getallusers/getallusers.html
var getallusers_default;
var init_getallusers = __esm({
  "angular:jit:template:src/app/getallusers/getallusers.html"() {
    getallusers_default = '<!-- <div class="home-container mt-4" style="background-color: #1a1a1a;">\n  <div *ngFor="let user of users" class="card mb-3 bg-white text-black shadow-sm w-100">\n    <div class="row g-0 align-items-center">\n      <div class="col-md-2 text-center">\n        <img src="/seller.png" class="img-fluid rounded-start m-2" alt="User">\n      </div>\n      <div class="col-md-10">\n        <div class="card-body">\n          <h5 class="card-title">{{ user.name }}</h5>\n          <p class="card-text mb-1">\u{1F4E7} Email: {{ user.email }}</p>\n          <p class="card-text mb-1">\u{1F4F1} Mobile: {{ user.mobile }}</p>\n          <p class="card-text">\u{1F9D1}\u200D\u{1F4BC} Role: {{ user.role }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n<!-- <div class="home-container mt-4" style="background-color: #1a1a1a;">\n  <div *ngFor="let user of users" class="user-card">\n    <img src="/seller.png" alt="User" class="user-image">\n    <div class="user-details">\n      <h5>{{ user.name }}</h5>\n      <p>\u{1F4E7} Email: {{ user.email }}</p>\n      <p>\u{1F4F1} Department: {{ user.department}}</p>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Role: {{ user.role }}</p>\n    </div>\n  </div>\n</div> -->\n<!-- In your component HTML -->\n<div class="home-container">\n  <div *ngFor="let user of users" class="user-card">\n    <img src="/seller.png" alt="User" class="user-image">\n    <div class="user-details">\n      <h5>{{ user.fullName }}</h5>\n      <p>\u{1F9D1}\u200D\u{1F4BC}User ID:{{user.id}}</p>\n      <p>\u{1F4E7} Email: {{ user.email }}</p>\n      <p>\u{1F4F1} Department: {{ user.department }}</p>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Role: {{ user.role }}</p>\n    </div>\n  </div>\n</div>\n\n';
  }
});

// angular:jit:style:src/app/getallusers/getallusers.css
var getallusers_default2;
var init_getallusers2 = __esm({
  "angular:jit:style:src/app/getallusers/getallusers.css"() {
    getallusers_default2 = "/* src/app/getallusers/getallusers.css */\nbody,\n.home-container {\n  background-color: #000000;\n  min-height: 100vh;\n  padding: 1rem;\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-details h5 {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n}\n.user-details p {\n  margin: 2px 0;\n}\n.user-card {\n  gap: 50px;\n}\n/*# sourceMappingURL=getallusers.css.map */\n";
  }
});

// src/app/getallusers/getallusers.ts
var Getallusers;
var init_getallusers3 = __esm({
  "src/app/getallusers/getallusers.ts"() {
    "use strict";
    init_tslib_es6();
    init_getallusers();
    init_getallusers2();
    init_common();
    init_core();
    init_forms();
    init_http();
    Getallusers = class Getallusers2 {
      http;
      users = [];
      constructor(http) {
        this.http = http;
      }
      ngOnInit() {
        const token = localStorage.getItem("token");
        const apiUrl = "http://localhost:8080/consultadd/admin/employees";
        if (token) {
          const headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          });
          this.http.get(apiUrl, { headers }).subscribe({
            next: (data) => {
              console.log("Fetched Employees:", data);
              this.users = data;
            },
            error: (error) => {
              console.error("Failed to fetch employees:", error);
            }
          });
        } else {
          console.warn("No token found. Please login first.");
        }
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Getallusers = __decorate([
      Component({
        selector: "app-getallusers",
        standalone: true,
        imports: [FormsModule, CommonModule],
        template: getallusers_default,
        styles: [getallusers_default2]
      })
    ], Getallusers);
  }
});

// src/app/getallusers/getallusers.spec.ts
var require_getallusers_spec = __commonJS({
  "src/app/getallusers/getallusers.spec.ts"(exports) {
    init_testing();
    init_getallusers3();
    describe("Getallusers", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Getallusers]
        }).compileComponents();
        fixture = TestBed.createComponent(Getallusers);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_getallusers_spec();
//# sourceMappingURL=spec-app-getallusers-getallusers.spec.js.map
