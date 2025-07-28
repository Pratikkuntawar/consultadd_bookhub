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

// angular:jit:template:src/app/updatebookrequest/updatebookrequest.html
var updatebookrequest_default;
var init_updatebookrequest = __esm({
  "angular:jit:template:src/app/updatebookrequest/updatebookrequest.html"() {
    updatebookrequest_default = '\n<div class="home-container" style="background-color: #000; min-height: 100vh; padding: 20px;">\n  <!-- <input\n    [(ngModel)]="searchId"\n    (keyup.enter)="searchUser()"\n    type="number"\n    placeholder="Enter Book Request ID"\n    class="search-bar"\n  /> this input and searchuser() approverequest and rejectrequest() wale functions uncomment krna-->\n<!-- <div *ngFor="let user of filteredUsers" class="user-card" > -->\n  <div *ngFor="let user of pendingRequests" class="user-card">\n\n  <img src="/books.webp" alt="User" class="user-image" />\n  <!-- <div class="user-details">\n    <h5>{{ user.name }}</h5>\n    <p>\u{1F9D1}\u200D\u{1F4BC} Book ID: {{ user.id }}</p>\n    <p>\u{1F4E7} Email: {{ user.email }}</p>\n    <p>\u{1F4F1} Department: {{ user.department }}</p>\n    <p>\u{1F9D1}\u200D\u{1F4BC} Role: {{ user.role }}</p> -->\n <!-- </div> -->\n      <div class="user-details">\n      <!-- <h5>Book Title:{{ user.title }}</h5>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Author: {{ user.author}}</p>\n      <p>\u{1F4E7} Reason: {{ user.reason}}</p>\n      <p>\u{1F4F1} Requester ID: {{ user.requester.id}}</p>\n      <p>\u{1F9D1}\u200D\u{1F4BC} Request BY: {{ user.requester.fullName}}</p>\n      <p>Requester Email:{{user.requester.email}}</p> -->\n      <h5>\u{1F4DA} Book Title: {{ user.title }}</h5>\n      <h5>Donation Id:{{user.id}}</h5>\n<p>\u270D\uFE0F Author: {{ user.author }}</p>\n<p>\u{1F4DD} Reason: {{ user.reason }}</p>\n<p>\u{1F194} Requester ID: {{ user.requester.id }}</p>\n<p>\u{1F64B} Request By: {{ user.requester.fullName }}</p>\n<p>\u{1F4E7} Requester Email: {{ user.requester.email }}</p>\n    </div>\n    <div class="action-buttons">\n      <img\n        src="/checked.png"\n        alt="Approve"\n        class="action-icon"\n        (click)="approveRequest(user.id)"\n      />\n      <img\n        src="/delete-button.png"\n        alt="Reject"\n        class="action-icon"\n        (click)="rejectRequest(user.id )"\n      />\n  </div>\n</div>\n</div>\n';
  }
});

// angular:jit:style:src/app/updatebookrequest/updatebookrequest.css
var updatebookrequest_default2;
var init_updatebookrequest2 = __esm({
  "angular:jit:style:src/app/updatebookrequest/updatebookrequest.css"() {
    updatebookrequest_default2 = "/* src/app/updatebookrequest/updatebookrequest.css */\nbody,\n.home-container {\n  background-color: #000000;\n  min-height: 100vh;\n  padding: 1rem;\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-details h5 {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.user-details {\n  flex: 1;\n}\n.user-details p {\n  margin: 2px 0;\n}\n.search-bar {\n  width: 50%;\n  padding: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  border: none;\n  border-radius: 8px;\n  justify-content: center;\n}\n.search-bar {\n  width: 40%;\n  padding: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  border: none;\n  border-radius: 8px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-color: green;\n  box-shadow: 2px solid red;\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n}\n.user-details h5 {\n  margin: 0 0 10px;\n}\ninput::placeholder {\n  text-align: center;\n}\n.action-buttons {\n  display: flex;\n  gap: 20px;\n  margin-left: auto;\n  align-items: center;\n}\n.action-icon {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.action-icon:hover {\n  transform: scale(1.2);\n}\n.user-card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);\n}\n.user-image {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-details {\n  flex-grow: 1;\n}\n.user-details h5 {\n  margin: 0 0 10px;\n}\ninput::placeholder {\n  text-align: center;\n}\n.action-buttons {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.action-icon {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.action-icon:hover {\n  transform: scale(1.2);\n}\n/*# sourceMappingURL=updatebookrequest.css.map */\n";
  }
});

// src/app/updatebookrequest/updatebookrequest.ts
var Updatebookrequest;
var init_updatebookrequest3 = __esm({
  "src/app/updatebookrequest/updatebookrequest.ts"() {
    "use strict";
    init_tslib_es6();
    init_updatebookrequest();
    init_updatebookrequest2();
    init_common();
    init_http();
    init_core();
    init_forms();
    Updatebookrequest = class Updatebookrequest2 {
      http;
      users = [];
      filteredUsers = [];
      searchId = null;
      constructor(http) {
        this.http = http;
      }
      // ngOnInit(): void {
      //   this.users = [
      //     { id: 1, name: 'John Doe', email: 'kuntawarpratik4@gmail.com', department: 'Coding', role: 'Admin' },
      //     { id: 2, name: 'Jane Smith', email: 'ramlakhan4@gmail.com', department: 'Coding', role: 'Buyer' },
      //     { id: 3, name: 'Michael Johnson', email: 'dhruvpatel@gmail.com', department: 'HR', role: 'Seller' },
      //     { id: 4, name: 'Ram Kapoor', email: 'ramkapoor@gmail.com', department: 'HR', role: 'Seller' },
      //     { id: 5, name: 'Rohit Sharma', email: 'rohitsharma@gmail.com', department: 'Coding', role: 'ADMIN' }
      //   ];
      //   this.filteredUsers = [...this.users]; // Initially show all users
      // }
      ngOnInit() {
        this.loadAllRequests();
      }
      loadAllRequests() {
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
      // searchUser() {
      //   const url = `http://localhost:8080/api/book-requests/employee/${this.searchId}`;
      //   const token = localStorage.getItem('token');
      //   const headers = new HttpHeaders({
      //         'Content-Type': 'application/json',
      //         'Authorization': `Bearer ${token}`
      //       });
      //   this.http.get<any[]>(url, { headers }).subscribe(
      //     data => this.filteredUsers = data,
      //     error => console.error('Error fetching data:', error)
      //   );
      // }
      // approveRequest(requestId: number) {
      //   const url = `http://localhost:8080/api/book-requests/approve/${requestId}`;
      //   const token = localStorage.getItem('token');
      //   const headers = new HttpHeaders({
      //         'Content-Type': 'application/json',
      //         'Authorization': `Bearer ${token}`
      //       });
      //   this.http.put(url,{ headers }).subscribe(
      //     () => {
      //       this.filteredUsers = this.filteredUsers.filter(u => u.id !== requestId);
      //       alert('Request approved!');
      //     },
      //     error => console.error('Error approving request:', error)
      //   );
      // }
      // rejectRequest(requestId: number) {
      //   const url = `http://localhost:8080/api/book-request/reject/${requestId}`;
      //   const token = localStorage.getItem('token');
      //   const headers = new HttpHeaders({
      //         'Content-Type': 'application/json',
      //         'Authorization': `Bearer ${token}`
      //       });
      //   this.http.put(url, { headers }).subscribe(
      //     () => {
      //       this.filteredUsers = this.filteredUsers.filter(u => u.id !== requestId);
      //       alert('Request rejected!');
      //     },
      //     error => console.error('Error rejecting request:', error)
      //   );
      // }
      //upar wala code user krna
      approveRequest(donationId) {
        const url = `http://localhost:8080/api/book-requests/approve/${donationId}`;
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        });
        this.http.put(url, {}, { headers }).subscribe(() => {
          this.users = this.users.filter((r) => r.donationId !== donationId);
          alert("Request approved!");
          this.loadAllRequests();
        }, (error) => console.error("Error approving request:", error));
      }
      rejectRequest(donationId) {
        const url = `http://localhost:8080/api/book-requests/reject/${donationId}`;
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        });
        this.http.put(url, {}, { headers }).subscribe(() => {
          this.users = this.users.filter((r) => r.id !== donationId);
          alert("Request rejected!");
          this.loadAllRequests();
        }, (error) => console.error("Error rejecting request:", error));
      }
      get pendingRequests() {
        return this.filteredUsers.filter((user) => user.status === "PENDING");
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Updatebookrequest = __decorate([
      Component({
        selector: "app-updatebookrequest",
        imports: [FormsModule, CommonModule],
        template: updatebookrequest_default,
        styles: [updatebookrequest_default2]
      })
    ], Updatebookrequest);
  }
});

// src/app/updatebookrequest/updatebookrequest.spec.ts
var require_updatebookrequest_spec = __commonJS({
  "src/app/updatebookrequest/updatebookrequest.spec.ts"(exports) {
    init_testing();
    init_updatebookrequest3();
    describe("Updatebookrequest", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Updatebookrequest]
        }).compileComponents();
        fixture = TestBed.createComponent(Updatebookrequest);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_updatebookrequest_spec();
//# sourceMappingURL=spec-app-updatebookrequest-updatebookrequest.spec.js.map
