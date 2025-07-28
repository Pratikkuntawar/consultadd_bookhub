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

// angular:jit:template:src/app/requestbook/requestbook.html
var requestbook_default;
var init_requestbook = __esm({
  "angular:jit:template:src/app/requestbook/requestbook.html"() {
    requestbook_default = '<div class="form-wrapper">\n<form (ngSubmit)="submitRequest()" #bookForm="ngForm">\n  <input type="text" name="title" [(ngModel)]="bookRequest.title" placeholder="Title" required />\n  <input type="text" name="author" [(ngModel)]="bookRequest.author" placeholder="Author" required />\n  <button type="submit">Request Book</button>\n</form>\n</div>';
  }
});

// angular:jit:style:src/app/requestbook/requestbook.css
var requestbook_default2;
var init_requestbook2 = __esm({
  "angular:jit:style:src/app/requestbook/requestbook.css"() {
    requestbook_default2 = "/* src/app/requestbook/requestbook.css */\nform {\n  background-color: #f9f9f9;\n  padding: 30px;\n  border-radius: 12px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 500px;\n  margin: 40px auto;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\nform input,\nform textarea,\nform select {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 16px;\n  width: 100%;\n  box-sizing: border-box;\n}\nform button {\n  padding: 12px;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  font-size: 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\nform button:hover {\n  background-color: #45a049;\n}\n.form-wrapper {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #eaeaea;\n}\n/*# sourceMappingURL=requestbook.css.map */\n";
  }
});

// src/app/requestbook/requestbook.ts
var Requestbook;
var init_requestbook3 = __esm({
  "src/app/requestbook/requestbook.ts"() {
    "use strict";
    init_tslib_es6();
    init_requestbook();
    init_requestbook2();
    init_common();
    init_http();
    init_core();
    init_forms();
    Requestbook = class Requestbook2 {
      http;
      bookRequest = {
        title: "",
        author: "",
        reason: "",
        requesterId: 0
      };
      employees = [];
      constructor(http) {
        this.http = http;
      }
      submitRequest() {
        const requestPayload = {
          title: this.bookRequest.title,
          author: this.bookRequest.author,
          reason: this.bookRequest.reason,
          requester: { id: this.bookRequest.requesterId }
        };
        this.http.post("http://localhost:8080/api/book-requests", requestPayload).subscribe((res) => alert("Book Requested!"), (err) => alert("Failed to submit request"));
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Requestbook = __decorate([
      Component({
        selector: "app-requestbook",
        imports: [FormsModule, CommonModule],
        template: requestbook_default,
        styles: [requestbook_default2]
      })
    ], Requestbook);
  }
});

// src/app/requestbook/requestbook.spec.ts
var require_requestbook_spec = __commonJS({
  "src/app/requestbook/requestbook.spec.ts"(exports) {
    init_testing();
    init_requestbook3();
    describe("Requestbook", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Requestbook]
        }).compileComponents();
        fixture = TestBed.createComponent(Requestbook);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_requestbook_spec();
//# sourceMappingURL=spec-app-requestbook-requestbook.spec.js.map
