import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-NU76FOGX.js";
import "./chunk-3SPZE3GT.js";
import {
  HttpClient,
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
  __spreadValues
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/updatebook/updatebook.html
var updatebook_default;
var init_updatebook = __esm({
  "angular:jit:template:src/app/updatebook/updatebook.html"() {
    updatebook_default = '<div class="form-container">\n  <form [formGroup]="updateForm" (ngSubmit)="onSubmit()">\n    <h2>Update Book</h2>\n\n    <label>Book ID:</label>\n    <input formControlName="id" type="number" placeholder="Enter Book ID" />\n\n    <label>Title:</label>\n    <input formControlName="title" type="text" />\n\n    <label>Author:</label>\n    <input formControlName="author" type="text" />\n\n    <label>Description:</label>\n    <textarea formControlName="description"></textarea>\n\n    <label>Book Type:</label>\n    <select formControlName="bookType">\n      <option value="PHYSICAL">PHYSICAL</option>\n      <option value="DIGITAL">DIGITAL</option>\n    </select>\n\n\n      <!-- <div class="form-group"> -->\n        <label>Department</label>\n        <select formControlName="department" required>\n          <option value="">Select Department</option>\n          <option value="CODING">CODING</option>\n          <option value="HR">HR</option>\n          <option value="SALES">SALES</option>\n          <option value="DELIVERY">DELIVERY</option>\n          <option value="MARKETING">MARKETING</option>\n        </select>\n      <!-- </div> -->\n\n    <label>PDF URL:</label>\n    <input formControlName="pdfUrl" type="text" />\n\n    <label>Image URL:</label>\n    <input formControlName="imageUrl" type="text" />\n\n        <label>Price:</label>\n    <input formControlName="price" type="number" />\n    \n    <button type="submit">Update Book</button>\n  </form>\n</div>\n\n';
  }
});

// angular:jit:style:src/app/updatebook/updatebook.css
var updatebook_default2;
var init_updatebook2 = __esm({
  "angular:jit:style:src/app/updatebook/updatebook.css"() {
    updatebook_default2 = "/* src/app/updatebook/updatebook.css */\n.form-container {\n  width: 500px;\n  margin: 60px auto;\n  background-color: #ffffff;\n  padding: 30px;\n  border-radius: 12px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\nform label {\n  display: block;\n  margin: 10px 0 5px;\n  font-weight: bold;\n}\nform input,\nform textarea,\nform select {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 15px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n}\nbutton {\n  width: 100%;\n  padding: 10px;\n  background-color: #0b5ed7;\n  color: white;\n  font-weight: bold;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\nbutton:hover {\n  background-color: #084298;\n}\n/*# sourceMappingURL=updatebook.css.map */\n";
  }
});

// src/app/updatebook/updatebook.ts
var Updatebook;
var init_updatebook3 = __esm({
  "src/app/updatebook/updatebook.ts"() {
    "use strict";
    init_tslib_es6();
    init_updatebook();
    init_updatebook2();
    init_http();
    init_core();
    init_forms();
    Updatebook = class Updatebook2 {
      fb;
      http;
      updateForm;
      constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.updateForm = this.fb.group({
          id: ["", Validators.required],
          title: ["", Validators.required],
          author: ["", Validators.required],
          description: ["", Validators.required],
          bookType: ["", Validators.required],
          department: ["", Validators.required],
          pdfUrl: ["", Validators.required],
          price: ["", Validators.required],
          imageUrl: ["", Validators.required]
        });
      }
      onSubmit() {
        const bookId = this.updateForm.value.id;
        const body = __spreadValues({}, this.updateForm.value);
        delete body.id;
        const token = localStorage.getItem("token");
        this.http.put(`http://localhost:8080/consultadd/books/updatebook/${bookId}`, body, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }).subscribe({
          next: (res) => {
            alert("\u2705 Book updated successfully");
          },
          error: (err) => {
            if (err.status === 403) {
              alert("\u274C Book not found with this ID");
            } else if (err.status === 404) {
              alert("\u{1F6AB} Forbidden: You are not authorized to update this book");
            } else {
              alert("\u26A0\uFE0F Error updating book. Please try again.");
              console.error("Error:", err);
            }
          }
        });
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: HttpClient }
      ];
    };
    Updatebook = __decorate([
      Component({
        selector: "app-updatebook",
        imports: [FormsModule, ReactiveFormsModule],
        template: updatebook_default,
        styles: [updatebook_default2]
      })
    ], Updatebook);
  }
});

// src/app/updatebook/updatebook.spec.ts
var require_updatebook_spec = __commonJS({
  "src/app/updatebook/updatebook.spec.ts"(exports) {
    init_testing();
    init_updatebook3();
    describe("Updatebook", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Updatebook]
        }).compileComponents();
        fixture = TestBed.createComponent(Updatebook);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_updatebook_spec();
//# sourceMappingURL=spec-app-updatebook-updatebook.spec.js.map
