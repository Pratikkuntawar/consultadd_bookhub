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

// angular:jit:template:src/app/searchbyid/searchbyid.html
var searchbyid_default;
var init_searchbyid = __esm({
  "angular:jit:template:src/app/searchbyid/searchbyid.html"() {
    searchbyid_default = '<!-- <div class="home-container">\n  <div *ngFor="let user of users" class="user-card">\n    <img src="/seller.png" alt="User" class="user-image">\n    <div class="user-details">\n      <h5>{{ user.name }}</h5>\n      <p>\u{1F9D1}\u200D\u{1F4BC}User ID:{{user.id}}</p>\n      <p>\u{1F4E7} Email: {{ user.email }}</p>\n      <p>\u{1F4F1} Department: {{ user.department }}</p>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Role: {{ user.role }}</p>\n    </div>\n  </div>\n</div> -->\n\n\n<div class="home-container" style="background-color: #000; min-height: 100vh; padding: 20px;">\n  <input\n    [(ngModel)]="searchId"\n    (keyup.enter)="searchUser()"\n    type="number"\n    placeholder="Enter User ID"\n    class="search-bar"\n  />\n\n  <div *ngFor="let user of filteredUsers" class="user-card">\n    <img src="/seller.png" alt="User" class="user-image" />\n    <div class="user-details">\n      <h5>{{ user.fullName }}</h5>\n      <p>\u{1F9D1}\u200D\u{1F4BC} User ID: {{ user.id }}</p>\n      <p>\u{1F4E7} Email: {{ user.email }}</p>\n      <p>\u{1F4F1} Department: {{ user.department }}</p>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Role: {{ user.role }}</p>\n    </div>\n    \n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/searchbyid/searchbyid.css
var searchbyid_default2;
var init_searchbyid2 = __esm({
  "angular:jit:style:src/app/searchbyid/searchbyid.css"() {
    searchbyid_default2 = "/* src/app/searchbyid/searchbyid.css */\nbody,\n.home-container {\n  background-color: #000000;\n  min-height: 100vh;\n  padding: 1rem;\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-details h5 {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n}\n.user-details p {\n  margin: 2px 0;\n}\n.search-bar {\n  width: 50%;\n  padding: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  border: none;\n  border-radius: 8px;\n  justify-content: center;\n}\n.search-bar {\n  width: 40%;\n  padding: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  border: none;\n  border-radius: 8px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-color: green;\n  box-shadow: 2px solid red;\n}\n.user-card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n}\n.user-details h5 {\n  margin: 0 0 10px;\n}\ninput::placeholder {\n  text-align: center;\n}\n.action-buttons {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: flex;\n  gap: 15px;\n}\n.action-icon {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.action-icon:hover {\n  transform: scale(1.2);\n}\n/*# sourceMappingURL=searchbyid.css.map */\n";
  }
});

// src/app/searchbyid/searchbyid.ts
var Searchbyid;
var init_searchbyid3 = __esm({
  "src/app/searchbyid/searchbyid.ts"() {
    "use strict";
    init_tslib_es6();
    init_searchbyid();
    init_searchbyid2();
    init_core();
    init_common();
    init_forms();
    init_http();
    Searchbyid = class Searchbyid2 {
      http;
      users = [];
      filteredUsers = [];
      searchId = null;
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
              this.filteredUsers = [...this.users];
            },
            error: (error) => {
              console.error("Failed to fetch employees:", error);
            }
          });
        } else {
          console.warn("No token found. Please login first.");
        }
      }
      searchUser() {
        if (this.searchId == null || this.searchId.toString().trim() === "") {
          this.filteredUsers = [...this.users];
          return;
        }
        const found = this.users.filter((user) => user.id === this.searchId);
        if (found.length > 0) {
          this.filteredUsers = found;
        } else {
          alert("No Result Found");
          this.filteredUsers = [...this.users];
        }
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Searchbyid = __decorate([
      Component({
        selector: "app-searchbyid",
        standalone: true,
        imports: [CommonModule, FormsModule],
        template: searchbyid_default,
        styles: [searchbyid_default2]
      })
    ], Searchbyid);
  }
});

// src/app/searchbyid/searchbyid.spec.ts
var require_searchbyid_spec = __commonJS({
  "src/app/searchbyid/searchbyid.spec.ts"(exports) {
    init_testing();
    init_searchbyid3();
    describe("Searchbyid", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Searchbyid]
        }).compileComponents();
        fixture = TestBed.createComponent(Searchbyid);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_searchbyid_spec();
//# sourceMappingURL=spec-app-searchbyid-searchbyid.spec.js.map
