import {
  Router,
  init_router
} from "./chunk-UEHRZZES.js";
import "./chunk-4H22UJ5Z.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing2
} from "./chunk-7IK4HZVL.js";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-7LRCIF4P.js";
import {
  HttpClient,
  HttpHeaders,
  init_http
} from "./chunk-6FYC6G7U.js";
import {
  CommonModule,
  Component,
  TestBed,
  __decorate,
  fakeAsync,
  flush,
  init_common,
  init_core,
  init_testing,
  init_tslib_es6,
  tick
} from "./chunk-LYKWNGON.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/addbook/addbook.html
var addbook_default;
var init_addbook = __esm({
  "angular:jit:template:src/app/addbook/addbook.html"() {
    addbook_default = '\n<div class="modal-backdrop bg-dark show">\n  <div class="modal d-block" tabindex="-1">\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content custom-login-modal text-center p-4">\n        <h5 class="modal-title text-white mb-3">Add New Book</h5>\n        <form [formGroup]="bookForm" (ngSubmit)="onSubmit()">\n          <div class="form-group mb-3">\n            <input class="form-control dark-input" formControlName="title" placeholder="Title" required />\n          </div>\n\n          <div class="form-group mb-3">\n            <input class="form-control dark-input" formControlName="author" placeholder="Author" required />\n          </div>\n\n          <div class="form-group mb-3">\n            <textarea class="form-control dark-input" formControlName="description" placeholder="Description" rows="3"></textarea>\n          </div>\n\n          <div class="form-group mb-3">\n            <select class="form-control dark-input" formControlName="bookType" required>\n              <option value="">Select Type</option>\n              <option value="DIGITAL">DIGITAL</option>\n              <option value="PHYSICAL">PHYSICAL</option>\n            </select>\n          </div>\n\n          <div class="form-group mb-3">\n            <select class="form-control dark-input" formControlName="department" required>\n              <option value="">Select Department</option>\n              <option value="CODING">CODING</option>\n              <option value="HR">HR</option>\n              <option value="SALES">SALES</option>\n              <option value="DELIVERY">DELIVERY</option>\n              <option value="MARKETING">MARKETING</option>\n            </select>\n          </div>\n\n          <div class="form-group mb-3">\n            <input class="form-control dark-input" formControlName="pdfUrl" placeholder="PDF URL" />\n          </div>\n\n          <div class="form-group mb-3">\n            <input class="form-control dark-input" formControlName="imageUrl" placeholder="Image URL" />\n          </div>\n\n          <div class="form-group mb-3">\n            <input type="number" class="form-control dark-input" formControlName="price" placeholder="Price" required />\n          </div>\n\n          <div class="buttons">\n            <button type="submit" class="btn btn-primary fw-bold me-2" [disabled]="bookForm.invalid">Submit</button>\n          <button type="button" class="btn btn-danger fw-bold" (click)="handleClose()">Close</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/addbook/addbook.css
var addbook_default2;
var init_addbook2 = __esm({
  "angular:jit:style:src/app/addbook/addbook.css"() {
    addbook_default2 = '/* src/app/addbook/addbook.css */\n.page-container {\n  background-color: #000000;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 20px;\n}\n.form-container {\n  background-color: #ffffff;\n  padding: 30px;\n  border-radius: 10px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);\n}\n.form-title {\n  text-align: center;\n  margin-bottom: 25px;\n  color: #333;\n}\n.form-group {\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px;\n  font-size: 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  outline: none;\n  transition: border 0.3s ease;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  border-color: #000000;\n}\nbutton[type=submit] {\n  background-color: #000000;\n  color: white;\n  padding: 10px 15px;\n  font-size: 16px;\n  border: none;\n  border-radius: 7px;\n  cursor: pointer;\n  width: 100%;\n  transition: background-color 0.3s ease;\n}\nbutton[type=submit]:hover {\n  background-color: #333333;\n}\n.page-container {\n  background-color: #000000;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 20px;\n  position: relative;\n  overflow: hidden;\n}\n.page-container::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  filter: blur(8px);\n  opacity: 0.4;\n  z-index: 1;\n}\n.form-container {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 500px;\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 30px;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\nform label {\n  font-weight: 600;\n  display: block;\n  margin-bottom: 5px;\n  color: #333;\n}\nform input,\nform select,\nform textarea {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 15px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 16px;\n}\nbutton {\n  background-color: #007bff;\n  color: #fff;\n  padding: 10px 18px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 16px;\n}\nbutton:disabled {\n  background-color: #aaa;\n  cursor: not-allowed;\n}\n.modal-backdrop.show {\n  background-color: rgba(0, 0, 0, 0.85);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-login-modal {\n  background-color: #1e1e1e;\n  border-radius: 12px;\n  color: #ffffff;\n  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);\n}\n.dark-input {\n  background-color: #2d2d2d;\n  border: 1px solid #444;\n  color: #fff;\n}\n.buttons {\n  display: flex;\n}\noption {\n  text-align: left;\n  color: #007bff;\n}\ninput::placeholder {\n  text-align: left;\n  color: #007bff;\n}\n.modal-backdrop.show {\n  background-color: rgba(0, 0, 0, 0.85);\n  z-index: 1040;\n}\n.modal.d-block {\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1050;\n}\n.custom-login-modal {\n  background-color: #1f1f1f;\n  border-radius: 15px;\n  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  width: 100%;\n  max-width: 500px;\n}\n.custom-login-modal .modal-title {\n  font-size: 24px;\n  font-weight: bold;\n  color: #f8f8f8;\n}\n.dark-input {\n  background-color: #2c2c2c;\n  color: #ffffff;\n  border: 1px solid #444;\n  border-radius: 6px;\n}\n.dark-input::placeholder {\n  color: #cccccc;\n}\n.dark-input:focus {\n  background-color: #2c2c2c;\n  color: #ffffff;\n  border-color: #007bff;\n  box-shadow: none;\n}\n.buttons {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.btn-primary {\n  background-color: #007bff;\n  border: none;\n}\n.btn-danger {\n  background-color: #dc3545;\n  border: none;\n}\n/*# sourceMappingURL=addbook.css.map */\n';
  }
});

// src/app/addbook/addbook.ts
var AddBook;
var init_addbook3 = __esm({
  "src/app/addbook/addbook.ts"() {
    "use strict";
    init_tslib_es6();
    init_addbook();
    init_addbook2();
    init_core();
    init_forms();
    init_http();
    init_common();
    init_router();
    AddBook = class AddBook2 {
      fb;
      http;
      router;
      bookForm;
      constructor(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
      }
      ngOnInit() {
        this.bookForm = this.fb.group({
          title: ["", Validators.required],
          author: ["", Validators.required],
          description: [""],
          bookType: ["", Validators.required],
          department: ["", Validators.required],
          pdfUrl: [""],
          imageUrl: [""],
          price: ["", Validators.required]
        });
      }
      onSubmit() {
        if (this.bookForm.invalid) {
          return;
        }
        const bookData = this.bookForm.value;
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        });
        this.http.post("http://localhost:8080/consultadd/books/addbook", bookData, { headers }).subscribe({
          next: (res) => {
            alert("\u2705 Book added successfully!");
            console.log("Book added successfully:", res);
            this.bookForm.reset();
          },
          error: (err) => {
            alert("\u274C Failed to add book. Please try again.");
            console.error("Error while adding book:", err);
          }
        });
      }
      handleClose() {
        this.router.navigate(["/seller-dashboard"]);
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router }
      ];
    };
    AddBook = __decorate([
      Component({
        selector: "app-addbook",
        imports: [FormsModule, CommonModule, ReactiveFormsModule],
        template: addbook_default,
        styles: [addbook_default2]
      })
    ], AddBook);
  }
});

// src/app/addbook/addbook.spec.ts
var require_addbook_spec = __commonJS({
  "src/app/addbook/addbook.spec.ts"(exports) {
    init_testing();
    init_addbook3();
    init_forms();
    init_testing2();
    init_router();
    fdescribe("AddBook Component", () => {
      let component;
      let fixture;
      let httpMock;
      let routerSpy;
      beforeEach(() => __async(null, null, function* () {
        routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [
            AddBook,
            ReactiveFormsModule,
            FormsModule,
            HttpClientTestingModule
          ],
          providers: [
            { provide: Router, useValue: routerSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(AddBook);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create component", () => {
        expect(component).toBeTruthy();
      });
      it("should have form controls initialized", () => {
        const form = component.bookForm;
        expect(form).toBeTruthy();
        expect(form.controls["title"]).toBeDefined();
        expect(form.controls["author"]).toBeDefined();
      });
      it("should show error when submitting invalid form", () => {
        spyOn(window, "alert");
        component.bookForm.patchValue({ title: "", author: "" });
        component.onSubmit();
        expect(window.alert).not.toHaveBeenCalledWith("\u2705 Book added successfully!");
      });
      it("should send POST request on valid form submit", fakeAsync(() => {
        spyOn(window, "alert");
        const mockResponse = { message: "Book added" };
        const bookData = {
          title: "Test Book",
          author: "John Doe",
          description: "",
          bookType: "NOVEL",
          department: "LITERATURE",
          pdfUrl: "",
          imageUrl: "",
          price: 100
        };
        component.bookForm.setValue(bookData);
        localStorage.setItem("token", "mock-token");
        const http = TestBed.inject(HttpTestingController);
        component.onSubmit();
        const req = http.expectOne("http://localhost:8080/consultadd/books/addbook");
        expect(req.request.method).toBe("POST");
        expect(req.request.headers.get("Authorization")).toBe("Bearer mock-token");
        req.flush(mockResponse);
        tick();
        expect(window.alert).toHaveBeenCalledWith("\u2705 Book added successfully!");
        http.verify();
        flush();
      }));
      it("should alert on HTTP error", fakeAsync(() => {
        spyOn(window, "alert");
        const bookData = {
          title: "Test Book",
          author: "John Doe",
          description: "",
          bookType: "NOVEL",
          department: "LITERATURE",
          pdfUrl: "",
          imageUrl: "",
          price: 100
        };
        component.bookForm.setValue(bookData);
        localStorage.setItem("token", "mock-token");
        const http = TestBed.inject(HttpTestingController);
        component.onSubmit();
        const req = http.expectOne("http://localhost:8080/consultadd/books/addbook");
        req.flush({ message: "Error" }, { status: 500, statusText: "Server Error" });
        tick();
        expect(window.alert).toHaveBeenCalledWith("\u274C Failed to add book. Please try again.");
        http.verify();
        flush();
      }));
      it("should navigate to seller dashboard on handleClose()", () => {
        component.handleClose();
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/seller-dashboard"]);
      });
    });
  }
});
export default require_addbook_spec();
//# sourceMappingURL=spec-app-addbook-addbook.spec.js.map
