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
  __esm,
  __toESM
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/bookrequest/bookrequest.html
var bookrequest_default;
var init_bookrequest = __esm({
  "angular:jit:template:src/app/bookrequest/bookrequest.html"() {
    bookrequest_default = '\n\n\n<div class="modal-background d-flex justify-content-center align-items-center">\n  <div class="form-modal pop-out">\n    <h2 class="text-center mb-4">\u{1F4DA} Create Book Request</h2>\n    <form (ngSubmit)="submitRequest()" #form="ngForm">\n      <div class="mb-3">\n        <label class="form-label">Title:</label>\n        <input\n          class="form-control"\n          name="title"\n          [(ngModel)]="bookRequest.title"\n          required\n        />\n      </div>\n\n      <div class="mb-3">\n        <label class="form-label">Author:</label>\n        <input\n          class="form-control"\n          name="author"\n          [(ngModel)]="bookRequest.author"\n          required\n        />\n      </div>\n\n      <div class="mb-3">\n        <label class="form-label">Reason:</label>\n        <textarea\n          class="form-control"\n          name="reason"\n          [(ngModel)]="bookRequest.reason"\n          required\n        ></textarea>\n      </div>\n\n      <input\n        type="hidden"\n        name="requesterId"\n        [(ngModel)]="bookRequest.requesterId"\n        required\n      />\n\n      <div class="button-container  text-center mt-4">\n        <button class="btn btn-success px-4" type="submit">Submit</button>\n         <button class="btn btn-danger px-4" (click)="movetobuyerdashboard()">Close</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n';
  }
});

// angular:jit:style:src/app/bookrequest/bookrequest.css
var bookrequest_default2;
var init_bookrequest2 = __esm({
  "angular:jit:style:src/app/bookrequest/bookrequest.css"() {
    bookrequest_default2 = "/* src/app/bookrequest/bookrequest.css */\n.modal-background {\n  background-color: #000;\n  min-height: 100vh;\n  padding: 20px;\n}\n.form-modal {\n  background-color: #fff;\n  max-width: 500px;\n  width: 100%;\n}\n.modal-background {\n  background-color: #000;\n  min-height: 100vh;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.form-modal {\n  background-color: #ffffff;\n  border-radius: 20px;\n  padding: 30px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);\n  border: 1px solid #e0e0e0;\n  animation: popIn 0.4s ease-out;\n  transform: scale(1);\n  transition: transform 0.2s;\n}\n.form-modal:hover {\n  transform: scale(1.02);\n}\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.buttons {\n  display: flex;\n}\n.button-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  gap: 20px;\n}\n/*# sourceMappingURL=bookrequest.css.map */\n";
  }
});

// src/app/bookrequest/bookrequest.ts
var import_sweetalert2, BookRequest;
var init_bookrequest3 = __esm({
  "src/app/bookrequest/bookrequest.ts"() {
    "use strict";
    init_tslib_es6();
    init_bookrequest();
    init_bookrequest2();
    init_core();
    init_http();
    init_forms();
    init_common();
    init_router();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    BookRequest = class BookRequest2 {
      http;
      router;
      role = localStorage.getItem("role");
      bookRequest = {
        title: "",
        author: "",
        reason: "",
        requesterId: ""
      };
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }
      ngOnInit() {
        const id = localStorage.getItem("employeeId");
        if (id) {
          this.bookRequest.requesterId = id;
        }
      }
      movetobuyerdashboard() {
        if (this.role === "SELLER") {
          this.router.navigate(["/seller-dashboard"]);
        } else if (this.role === "BUYER") {
          this.router.navigate(["/buyer-dashboard"]);
        } else if (this.role == "ADMIN") {
          this.router.navigate(["/admin-dashboard"]);
        } else {
          alert("Unknown role");
        }
      }
      //   submitRequest() {
      //     const token = localStorage.getItem('token'); // or sessionStorage if you're storing it there
      //     const id=localStorage.getItem('employeeId');
      //     console.log("Requester Id",id);
      //     if (!token) {
      //       alert('Token not found. Please login.');
      //       return;
      //     }
      //     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      //     this.http
      //       .post('http://localhost:8080/api/book-requests/create-bookrequest', this.bookRequest, { headers })
      // .subscribe({
      //       next: () => {
      //         alert('✅ Book request submitted successfully!');
      //          if (this.role === 'SELLER') {
      //           this.router.navigate(['/seller-dashboard']);
      //         } else if (this.role === 'BUYER') {
      //           this.router.navigate(['/buyer-dashboard']);
      //         } else if (this.role === 'ADMIN') {
      //           this.router.navigate(['/admin-dashboard']);
      //         } else {
      //           alert('Unknown role');
      //         } // 🔁 replace with your actual route
      //       },
      //       error: (err) => {
      //         console.error(err);
      //         alert('❌ Failed to submit book request.');
      //       },
      //     });
      //   }
      submitRequest() {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("employeeId");
        console.log("Requester Id", id);
        if (!token) {
          import_sweetalert2.default.fire({
            icon: "warning",
            title: "Authentication Required",
            text: "Please login to continue."
          });
          return;
        }
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        this.http.post("http://localhost:8080/api/book-requests/create-bookrequest", this.bookRequest, { headers }).subscribe({
          next: () => {
            import_sweetalert2.default.fire({
              icon: "success",
              title: "Success!",
              text: "\u2705 Book request submitted successfully!"
            }).then(() => {
              if (this.role === "SELLER") {
                this.router.navigate(["/seller-dashboard"]);
              } else if (this.role === "BUYER") {
                this.router.navigate(["/buyer-dashboard"]);
              } else if (this.role === "ADMIN") {
                this.router.navigate(["/admin-dashboard"]);
              } else {
                import_sweetalert2.default.fire("Unknown role", "", "error");
              }
            });
          },
          error: (err) => {
            console.error(err);
            import_sweetalert2.default.fire({
              icon: "error",
              title: "Failed!",
              text: "\u274C Failed to submit book request."
            });
          }
        });
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router }
      ];
    };
    BookRequest = __decorate([
      Component({
        selector: "app-bookrequest",
        imports: [FormsModule, CommonModule],
        template: bookrequest_default,
        styles: [bookrequest_default2]
      })
    ], BookRequest);
  }
});

// src/app/bookrequest/bookrequest.spec.ts
var require_bookrequest_spec = __commonJS({
  "src/app/bookrequest/bookrequest.spec.ts"(exports) {
    init_testing();
    init_bookrequest3();
    describe("Bookrequest", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [BookRequest]
        }).compileComponents();
        fixture = TestBed.createComponent(BookRequest);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_bookrequest_spec();
//# sourceMappingURL=spec-app-bookrequest-bookrequest.spec.js.map
