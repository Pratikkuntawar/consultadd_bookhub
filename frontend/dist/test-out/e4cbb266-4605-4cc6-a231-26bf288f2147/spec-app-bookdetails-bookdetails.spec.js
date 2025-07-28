import {
  RouterModule,
  init_router
} from "./chunk-CDNPHVEI.js";
import "./chunk-CZVOOQAL.js";
import "./chunk-7OUSRNRQ.js";
import {
  CommonModule,
  init_common
} from "./chunk-AMQQJ5OH.js";
import {
  HttpClient,
  HttpHeaders,
  init_http
} from "./chunk-XENIYTW7.js";
import "./chunk-BYESBSSC.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-CBUZ25KJ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/bookdetails/bookdetails.html
var bookdetails_default;
var init_bookdetails = __esm({
  "angular:jit:template:src/app/bookdetails/bookdetails.html"() {
    bookdetails_default = '<!-- <div *ngIf="book" class="book-details-container" style="background-color: #000000; ">\n  <div class="book-image-section">\n    <img [src]="book.imageUrl" alt="{{ book.title }}" />\n  </div>\n  <div class="book-info-section">\n    <h1>{{ book.title }}</h1>\n    <h3>Author: {{ book.author }}</h3>\n    <p class="description">{{ book.description }}</p>\n    <p class="price">Price: \u20B9{{ book.price }}</p>\n\n    <div class="actions">\n      <button (click)="addToCart()" class="btn-cart ">Add to Cart</button>\n      <button (click)="addToFavorites()" class="btn-favorite">Add to Favorites</button>\n    </div>\n  </div>\n</div> -->\n\n\n\n<div *ngIf="books.length > 0" class="books-container" style="background-color: #000000; color: #ffffff; padding: 2rem;">\n  <div *ngFor="let book of books" class="book-details-container" style="display: flex; gap: 2rem; margin-bottom: 2rem; border: 1px solid #333; padding: 1.5rem; border-radius: 10px; background-color: #1f1f1f;">\n    \n    <!-- Book Image -->\n    <div class="book-image-section" style="flex: 1;">\n      <img [src]="book.imageUrl" [alt]="book.title" style="width: 100%; max-width: 200px; border-radius: 8px;" />\n    </div>\n\n    <!-- Book Info -->\n    <div class="book-info-section" style="flex: 2;">\n      <h1 style="color: #fef08a;">{{ book.title }}</h1>\n      <h3>Author: {{ book.author }}</h3>\n      <p class="description">{{ book.description }}</p>\n      <p class="price" style="font-weight: bold;">Price: \u20B9{{ book.price }}</p>\n\n      <!-- Action Buttons -->\n      <div class="actions" style="margin-top: 1rem;">\n      <button (click)="addToCart()" class="btn-cart" style="margin-right: 1rem; padding: 0.5rem 1rem;">Add to Cart</button>\n        <button (click)="addToFavorites()" class="btn-favorite" style="padding: 0.5rem 1rem;">Add to Favorites</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Show message if no books -->\n<div *ngIf="books.length === 0" style="text-align: center; color: #ffffff; margin-top: 2rem;">\n  No books available.\n</div>\n\n';
  }
});

// angular:jit:style:src/app/bookdetails/bookdetails.css
var bookdetails_default2;
var init_bookdetails2 = __esm({
  "angular:jit:style:src/app/bookdetails/bookdetails.css"() {
    bookdetails_default2 = "/* src/app/bookdetails/bookdetails.css */\n* {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  background-color: #121212;\n  color: #fff;\n  font-family: Arial, sans-serif;\n}\n.book-details-container {\n  display: flex;\n  flex-direction: row;\n  padding: 40px;\n  min-height: 100vh;\n  width: 100%;\n  gap: 100px;\n}\n.book-image-section img {\n  width: 350px;\n  height: auto;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);\n  border-bottom: 1px solid;\n  border: 5px solid #fef9c3;\n}\n.book-info-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transform: translateY(-120px);\n}\n.book-info-section h1 {\n  font-size: 36px;\n  margin-bottom: 10px;\n  color: #fff;\n}\n.book-info-section h3 {\n  font-size: 20px;\n  color: #ccc;\n  margin-bottom: 20px;\n}\n.description {\n  font-size: 20px;\n  color: #ddd;\n  margin-bottom: 20px;\n  max-width: 800px;\n  text-align: justify;\n}\n.price {\n  font-size: 22px;\n  font-weight: bold;\n  margin-bottom: 30px;\n  color: #0f0;\n}\n.actions {\n  display: flex;\n  gap: 20px;\n}\nbutton {\n  padding: 12px 24px;\n  font-size: 16px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-cart {\n  background-color: #007bff;\n  color: white;\n}\n.btn-cart:hover {\n  background-color: #0056b3;\n}\n.btn-favorite {\n  background-color: #ff4081;\n  color: white;\n}\n.btn-favorite:hover {\n  background-color: #c60055;\n}\n* {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  background-color: #121212;\n  color: #fff;\n  font-family: Arial, sans-serif;\n}\n.book-details-container {\n  display: flex;\n  flex-direction: row;\n  padding: 100px 40px 40px 40px;\n  min-height: 100vh;\n  width: 100%;\n  gap: 100px;\n}\n.book-image-section img {\n  width: 350px;\n  height: auto;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);\n  border: 5px solid #fef9c3;\n}\n.book-info-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 220px;\n}\n.book-info-section h1 {\n  font-size: 36px;\n  margin-bottom: 10px;\n  color: #fff;\n}\n.book-info-section h3 {\n  font-size: 20px;\n  color: #ccc;\n  margin-bottom: 20px;\n}\n.description {\n  font-size: 20px;\n  color: #ddd;\n  margin-bottom: 20px;\n  max-width: 800px;\n  text-align: justify;\n}\n.price {\n  font-size: 22px;\n  font-weight: bold;\n  margin-bottom: 30px;\n  color: #0f0;\n}\n.actions {\n  display: flex;\n  gap: 20px;\n}\nbutton {\n  padding: 12px 24px;\n  font-size: 16px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-cart {\n  background-color: #007bff;\n  color: white;\n}\n.btn-cart:hover {\n  background-color: #0056b3;\n}\n.btn-favorite {\n  background-color: #ff4081;\n  color: white;\n}\n.btn-favorite:hover {\n  background-color: #c60055;\n}\n/*# sourceMappingURL=bookdetails.css.map */\n";
  }
});

// src/app/bookdetails/bookdetails.ts
var BookDetailsComponent;
var init_bookdetails3 = __esm({
  "src/app/bookdetails/bookdetails.ts"() {
    "use strict";
    init_tslib_es6();
    init_bookdetails();
    init_bookdetails2();
    init_common();
    init_http();
    init_core();
    init_router();
    BookDetailsComponent = class BookDetailsComponent2 {
      http;
      books = [];
      constructor(http) {
        this.http = http;
      }
      ngOnInit() {
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        this.http.get("http://localhost:8080/consultadd/books/getallbooks", { headers }).subscribe({
          next: (data) => {
            this.books = data;
            console.log("\u{1F4DA} Books fetched:", this.books);
          },
          error: (err) => {
            console.error("\u274C Error fetching books:", err);
            alert("Failed to fetch books. Please check your token or try again.");
          }
        });
      }
      addToCart() {
        alert("add to cart");
      }
      addToFavorites() {
        alert("add to favorates");
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    BookDetailsComponent = __decorate([
      Component({
        standalone: true,
        selector: "app-bookdetails",
        imports: [CommonModule, RouterModule],
        template: bookdetails_default,
        styles: [bookdetails_default2]
      })
    ], BookDetailsComponent);
  }
});

// src/app/bookdetails/bookdetails.spec.ts
var require_bookdetails_spec = __commonJS({
  "src/app/bookdetails/bookdetails.spec.ts"(exports) {
    init_testing();
    init_bookdetails3();
    describe("Bookdetails", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [BookDetailsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(BookDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_bookdetails_spec();
//# sourceMappingURL=spec-app-bookdetails-bookdetails.spec.js.map
