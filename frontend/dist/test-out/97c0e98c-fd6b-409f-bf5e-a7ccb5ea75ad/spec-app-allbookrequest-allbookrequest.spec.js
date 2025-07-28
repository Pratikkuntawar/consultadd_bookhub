import {
  FormsModule,
  init_forms
} from "./chunk-B5TCOPU2.js";
import {
  CommonModule,
  init_common
} from "./chunk-XFPM5ZNV.js";
import {
  HttpClient,
  HttpHeaders,
  init_http
} from "./chunk-WYQ2KV7G.js";
import "./chunk-56AEGESF.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-QEPMZKHZ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-V6FC2DIM.js";

// angular:jit:template:src/app/allbookrequest/allbookrequest.html
var allbookrequest_default;
var init_allbookrequest = __esm({
  "angular:jit:template:src/app/allbookrequest/allbookrequest.html"() {
    allbookrequest_default = '<!-- <div class="home-container">\n  <div *ngFor="let user of users" class="user-card">\n    <img src="/books.webp" alt="User" class="user-image">\n    <div class="user-details">\n      <h5>{{ user.name }}</h5>\n      <p>\u{1F9D1}\u200D\u{1F4BC}User ID:{{user.id}}</p>\n      <p>\u{1F4E7} Email: {{ user.email }}</p>\n      <p>\u{1F4F1} Department: {{ user.department }}</p>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Role: {{ user.role }}</p>\n    </div>\n  </div>\n</div> -->\n\n\n\n\n\n\n\n<div class="home-container">\n  <div *ngFor="let user of users" class="user-card">\n    <img src="/books.webp" alt="User" class="user-image">\n    <div class="user-details">\n      <!-- <h5>Book Title:{{ user.title }}</h5>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Author: {{ user.author}}</p>\n      <p>\u{1F4E7} Reason: {{ user.reason}}</p>\n      <p>\u{1F4F1} Requester ID: {{ user.requester.id}}</p>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Request BY: {{ user.requester.fullName}}</p>\n      <p>Requester Email:{{user.requester.email}}</p> -->\n      <h5>\u{1F4DA} Book Title: {{ user.title }}</h5>\n<p>\u270D\uFE0F Author: {{ user.author }}</p>\n<p>\u{1F4DD} Reason: {{ user.reason }}</p>\n<p>\u{1F194} Requester ID: {{ user.requester.id }}</p>\n<p>\u{1F64B} Request By: {{ user.requester.fullName }}</p>\n<p>\u{1F4E7} Requester Email: {{ user.requester.email }}</p>\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/allbookrequest/allbookrequest.css
var allbookrequest_default2;
var init_allbookrequest2 = __esm({
  "angular:jit:style:src/app/allbookrequest/allbookrequest.css"() {
    allbookrequest_default2 = "/* src/app/allbookrequest/allbookrequest.css */\nbody,\n.home-container {\n  background-color: #000000;\n  min-height: 100vh;\n  padding: 1rem;\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-details h5 {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n}\n.user-details p {\n  margin: 2px 0;\n}\n/*# sourceMappingURL=allbookrequest.css.map */\n";
  }
});

// src/app/allbookrequest/allbookrequest.ts
var Allbookrequest;
var init_allbookrequest3 = __esm({
  "src/app/allbookrequest/allbookrequest.ts"() {
    "use strict";
    init_tslib_es6();
    init_allbookrequest();
    init_allbookrequest2();
    init_common();
    init_core();
    init_forms();
    init_http();
    Allbookrequest = class Allbookrequest2 {
      http;
      users = [];
      constructor(http) {
        this.http = http;
      }
      // ngOnInit(): void {
      //   this.http.get<any[]>('http://localhost:8080/api/book-requests/all').subscribe(
      //     (response) => {
      //       this.users = response.map(request => ({
      //         id: request.requester?.id,
      //         name: request.requester?.fullName,
      //         email: request.requester?.email,
      //         department: request.requester?.department,
      //         role: request.requester?.role
      //       }));
      //     },
      //     (error) => {
      //       console.error('Error fetching book requests:', error);
      //     }
      //   );
      // }
      ngOnInit() {
        const token = localStorage.getItem("token");
        const apiUrl = "http://localhost:8080/api/book-requests/all";
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
    Allbookrequest = __decorate([
      Component({
        selector: "app-getallusers",
        standalone: true,
        imports: [FormsModule, CommonModule],
        template: allbookrequest_default,
        styles: [allbookrequest_default2]
      })
    ], Allbookrequest);
  }
});

// src/app/allbookrequest/allbookrequest.spec.ts
var require_allbookrequest_spec = __commonJS({
  "src/app/allbookrequest/allbookrequest.spec.ts"(exports) {
    init_testing();
    init_allbookrequest3();
    describe("Allbookrequest", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Allbookrequest]
        }).compileComponents();
        fixture = TestBed.createComponent(Allbookrequest);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_allbookrequest_spec();
//# sourceMappingURL=spec-app-allbookrequest-allbookrequest.spec.js.map
