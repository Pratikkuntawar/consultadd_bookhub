import {
  FormsModule,
  init_forms
} from "./chunk-E4GEBTZE.js";
import {
  Router,
  init_router
} from "./chunk-V7S46CQ4.js";
import "./chunk-E776C4KC.js";
import "./chunk-SG2WTSSV.js";
import {
  CommonModule,
  init_common
} from "./chunk-6UKHD5WX.js";
import {
  HttpClient,
  HttpHeaders,
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

// angular:jit:template:src/app/donatebook/donatebook.html
var donatebook_default;
var init_donatebook = __esm({
  "angular:jit:template:src/app/donatebook/donatebook.html"() {
    donatebook_default = '<div class="modal-background d-flex justify-content-center align-items-center">\n  <div class="form-modal pop-out">\n    <h2 class="text-center mb-4">\u{1F4D8} Donate a Book</h2>\n    <form (ngSubmit)="submitDonation()" #form="ngForm">\n      <div class="mb-3">\n        <label class="form-label">Title:</label>\n        <input\n          class="form-control"\n          name="title"\n          [(ngModel)]="book.title"\n          required\n        />\n      </div>\n\n      <div class="mb-3">\n        <label class="form-label">Author:</label>\n        <input\n          class="form-control"\n          name="author"\n          [(ngModel)]="book.author"\n          required\n        />\n      </div>\n\n      <div class="mb-3">\n        <label class="form-label">PDF URL:</label>\n        <input\n          type="url"\n          class="form-control"\n          name="pdfUrl"\n          [(ngModel)]="book.pdfUrl"\n          required\n        />\n      </div>\n\n      <div class="mb-3">\n        <label class="form-label">Image URL:</label>\n        <input\n          type="url"\n          class="form-control"\n          name="imageUrl"\n          [(ngModel)]="book.imageUrl"\n          required\n        />\n      </div>\n\n      <div class="mb-3">\n        <label class="form-label">Department:</label>\n        <select\n          class="form-select"\n          name="department"\n          [(ngModel)]="book.department"\n          required\n        >\n          <option value="" disabled selected>Select department</option>\n          <option value="CODING">CODING</option>\n          <option value="ELECTRONICS">ELECTRONICS</option>\n          <option value="MECHANICAL">MECHANICAL</option>\n        </select>\n      </div>\n\n      <!-- Donor ID hidden -->\n      <input\n        type="hidden"\n        name="donorId"\n        [(ngModel)]="book.donor.id"\n        required\n      />\n\n      <div class="button-container">\n        <button class="btn btn-success px-4" type="submit">Submit</button>\n        <button class="btn btn-danger px-4" (click)="movetobuyerdashboard()" type="button">Close</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n';
  }
});

// angular:jit:style:src/app/donatebook/donatebook.css
var donatebook_default2;
var init_donatebook2 = __esm({
  "angular:jit:style:src/app/donatebook/donatebook.css"() {
    donatebook_default2 = "/* src/app/donatebook/donatebook.css */\n.modal-background {\n  background-color: #000;\n  min-height: 100vh;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.form-modal {\n  background-color: #ffffff;\n  border-radius: 20px;\n  padding: 30px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);\n  border: 1px solid #e0e0e0;\n  animation: popIn 0.4s ease-out;\n}\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.button-container {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=donatebook.css.map */\n";
  }
});

// src/app/donatebook/donatebook.ts
var DonateBook;
var init_donatebook3 = __esm({
  "src/app/donatebook/donatebook.ts"() {
    "use strict";
    init_tslib_es6();
    init_donatebook();
    init_donatebook2();
    init_core();
    init_http();
    init_router();
    init_forms();
    init_common();
    DonateBook = class DonateBook2 {
      http;
      router;
      role = localStorage.getItem("role");
      book = {
        title: "",
        author: "",
        pdfUrl: "",
        imageUrl: "",
        department: "",
        donor: {
          id: 0
        }
      };
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }
      ngOnInit() {
        const id = localStorage.getItem("employeeId");
        if (id) {
          this.book.donor.id = +id;
        }
      }
      // submitDonation() {
      //   const token = localStorage.getItem('token');
      //   if (!token) {
      //     alert('Please login first.');
      //     return;
      //   }
      //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      //   this.http
      //     .post('http://localhost:8080/api/donations/donor/donate-book', this.book, { headers })
      //     .subscribe({
      //       next: () => {
      //         alert('✅ Book donation submitted successfully!');
      //         this.router.navigate(['/buyer-dashboard']); // update with actual route
      //       },
      //       error: (err) => {
      //         console.error(err);
      //         alert('❌ Failed to donate book.');
      //       },
      //     });
      // }
      submitDonation() {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Please login first.");
          return;
        }
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        this.http.post("http://localhost:8080/api/donations/donor/donate-book", this.book, { headers }).subscribe({
          next: () => {
            alert("\u2705 Book donation submitted successfully!");
            if (this.role === "SELLER") {
              this.router.navigate(["/seller-dashboard"]);
            } else if (this.role === "BUYER") {
              this.router.navigate(["/buyer-dashboard"]);
            } else if (this.role === "ADMIN") {
              this.router.navigate(["/admin-dashboard"]);
            } else {
              alert("Unknown role");
            }
          },
          error: (err) => {
            console.error(err);
            alert("\u274C Failed to donate book.");
          }
        });
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
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router }
      ];
    };
    DonateBook = __decorate([
      Component({
        selector: "app-donatebook",
        imports: [FormsModule, CommonModule],
        template: donatebook_default,
        styles: [donatebook_default2]
      })
    ], DonateBook);
  }
});

// src/app/donatebook/donatebook.spec.ts
var require_donatebook_spec = __commonJS({
  "src/app/donatebook/donatebook.spec.ts"(exports) {
    init_testing();
    init_donatebook3();
    describe("Donatebook", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DonateBook]
        }).compileComponents();
        fixture = TestBed.createComponent(DonateBook);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_donatebook_spec();
//# sourceMappingURL=spec-app-donatebook-donatebook.spec.js.map
