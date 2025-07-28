import {
  FormsModule,
  init_forms
} from "./chunk-Z6YZQFV4.js";
import {
  HttpClient,
  HttpHeaders,
  init_http
} from "./chunk-IAEXST72.js";
import {
  CommonModule,
  Component,
  TestBed,
  __decorate,
  init_common,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-JXZAXFWT.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/updatedonations/updatedonations.html
var updatedonations_default;
var init_updatedonations = __esm({
  "angular:jit:template:src/app/updatedonations/updatedonations.html"() {
    updatedonations_default = `
<div class="home-container" style="background-color: #000; min-height: 100vh; padding: 20px;">
  <input
    [(ngModel)]="searchId"
    (keyup.enter)="searchUser()"
    type="number"
    placeholder="Enter Donation ID"
    class="search-bar"
  />

  <div *ngFor="let donation of filteredUsers">
    <!-- Show card only if donation status is PENDING -->
    <div *ngIf="donation.status === 'PENDING'" class="user-card">
      <img src="/books.webp" alt="User" class="user-image" />
      <div class="user-details">
        <h5>Book Title : {{ donation.title }}</h5>
        <p>\u{1F9D1}\u200D\u{1F4BC} Donation ID: {{ donation.id }}</p>
        <p>\u{1F4E7} Author: {{ donation.author }}</p>
        <p>\u{1F4F1} PDF Url: {{ donation.pdfUrl }}</p>
        <p>\u{1F5BC}\uFE0F Image Url: {{ donation.imageUrl }}</p>
        <p>\u23F3 Status:{{donation.status}}</p>
  
      </div>
            <div class="action-buttons">
          <img
            src="/checked.png"
            alt="Approve"
            class="action-icon"
            (click)="approveRequest(donation.id)"
          />
          <img
            src="/delete-button.png"
            alt="Reject"
            class="action-icon"
            (click)="rejectRequest(donation.id)"
          />
        </div>
    </div>
  </div>
</div>
`;
  }
});

// angular:jit:style:src/app/updatedonations/updatedonations.css
var updatedonations_default2;
var init_updatedonations2 = __esm({
  "angular:jit:style:src/app/updatedonations/updatedonations.css"() {
    updatedonations_default2 = "/* src/app/updatedonations/updatedonations.css */\nbody,\n.home-container {\n  background-color: #000000;\n  min-height: 100vh;\n  padding: 1rem;\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-details h5 {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.user-details {\n  flex: 1;\n}\n.user-details p {\n  margin: 2px 0;\n}\n.search-bar {\n  width: 50%;\n  padding: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  border: none;\n  border-radius: 8px;\n  justify-content: center;\n}\n.search-bar {\n  width: 40%;\n  padding: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  border: none;\n  border-radius: 8px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-color: green;\n  box-shadow: 2px solid red;\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n}\n.user-details h5 {\n  margin: 0 0 10px;\n}\ninput::placeholder {\n  text-align: center;\n}\n.action-buttons {\n  display: flex;\n  gap: 20px;\n  margin-left: auto;\n  align-items: center;\n}\n.action-icon {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.action-icon:hover {\n  transform: scale(1.2);\n}\n.user-card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);\n  justify-content: space-between;\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-details {\n  flex-grow: 1;\n}\n.user-details h5 {\n  margin: 0 0 10px;\n}\ninput::placeholder {\n  text-align: center;\n}\n.action-buttons {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.action-icon {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.action-icon:hover {\n  transform: scale(1.2);\n}\n.user-card {\n  gap: 50px;\n}\n.user-details {\n  align-items: center;\n}\n.action-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-icon {\n  width: 50px;\n  height: 50px;\n  margin: 0px 5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=updatedonations.css.map */\n";
  }
});

// src/app/updatedonations/updatedonations.ts
var Updatedonations;
var init_updatedonations3 = __esm({
  "src/app/updatedonations/updatedonations.ts"() {
    "use strict";
    init_tslib_es6();
    init_updatedonations();
    init_updatedonations2();
    init_core();
    init_http();
    init_common();
    init_forms();
    Updatedonations = class Updatedonations2 {
      http;
      //users: any[] = [];
      donations = [];
      filteredUsers = [];
      searchId = null;
      constructor(http) {
        this.http = http;
      }
      ngOnInit() {
        this.fetchDonations();
      }
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
            this.filteredUsers = [...this.donations];
          },
          error: (error) => {
            console.error("Error fetching donations:", error);
          }
        });
      }
      searchUser() {
        if (this.searchId == null || this.searchId.toString().trim() === "") {
          this.filteredUsers = [...this.donations];
          return;
        }
        const found = this.donations.filter((donation) => donation.id === this.searchId);
        if (found.length > 0) {
          this.filteredUsers = found;
        } else {
          alert("No Result Found");
          this.filteredUsers = [...this.donations];
        }
      }
      approveRequest(id) {
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        const url = `http://localhost:8080/api/donations/${id}/status`;
        this.http.put(url, { status: "APPROVED" }, { headers }).subscribe({
          next: (res) => {
            alert("Donation Approved Successfully");
            console.log("Success:", res);
          },
          error: (err) => {
            console.error("Error approving donation:", err);
            alert("Failed to approve donation");
          }
        });
      }
      rejectRequest(id) {
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        const url = `http://localhost:8080/api/donations/${id}/status`;
        this.http.put(url, { status: "REJECTED" }, { headers }).subscribe({
          next: (res) => {
            alert("Donation Rejected Successfully");
            console.log("Success:", res);
          },
          error: (err) => {
            console.error("Error rejecting donation:", err);
            alert("Failed to reject donation");
          }
        });
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Updatedonations = __decorate([
      Component({
        selector: "app-updatedonations",
        standalone: true,
        imports: [FormsModule, CommonModule],
        template: updatedonations_default,
        styles: [updatedonations_default2]
      })
    ], Updatedonations);
  }
});

// src/app/updatedonations/updatedonations.spec.ts
var require_updatedonations_spec = __commonJS({
  "src/app/updatedonations/updatedonations.spec.ts"(exports) {
    init_testing();
    init_updatedonations3();
    describe("Updatedonations", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Updatedonations]
        }).compileComponents();
        fixture = TestBed.createComponent(Updatedonations);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_updatedonations_spec();
//# sourceMappingURL=spec-app-updatedonations-updatedonations.spec.js.map
