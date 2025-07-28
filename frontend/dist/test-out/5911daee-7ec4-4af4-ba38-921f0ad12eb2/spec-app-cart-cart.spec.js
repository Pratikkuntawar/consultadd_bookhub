import {
  FormsModule,
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
  init_common,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-LYKWNGON.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/cart/cart.html
var cart_default;
var init_cart = __esm({
  "angular:jit:template:src/app/cart/cart.html"() {
    cart_default = '\n\n\n\n\n\n\n\n\n\n<div class="container-fluid mt-4 " >\n  <div class="d-flex justify-content-between align-items-center">\n    <h2>Your Cart</h2>\n    <button class="btn btn-danger" (click)="clearCart()">Clear Cart \u{1F5D1}\uFE0F</button>\n  </div>\n\n  <div *ngIf="cartItems.length === 0" class="alert alert-info text-center mt-4">\n    Add books to cart \u{1F4DA}\n  </div>\n\n  <div *ngFor="let item of cartItems" class="card mb-3 shadow-sm">\n    <div class="row no-gutters align-items-center">\n      \n      <!-- Image section -->\n      <div class="col-md-2">\n        <img src="/books.webp" class="img-fluid rounded-start" alt="Book Image" />\n      </div>\n\n      <!-- Details section -->\n      <div class="col-md-7">\n        <!-- <div class="card-body">\n          <h5 class="card-title">Title: {{ item.title }}</h5>\n          <p class="card-text mb-1"><strong>Author:</strong> {{ item.author }}</p>\n\n          <label for="qty">Quantity:</label>\n          <input\n            type="number"\n            min="1"\n            [(ngModel)]="item.quantity"\n            class="form-control form-control-sm"\n            style="width: 100px; display: inline-block;"\n          />\n        </div> -->\n        <div class="card-body">\n  <h5 class="card-title">Title: {{ item.title }}</h5>\n  <p class="card-text mb-1"><strong>Author:</strong> {{ item.author }}</p>\n\n  \n\n  <div class="d-flex align-items-center mb-2">\n  <label for="qty" class="me-2 mb-0"><strong>Quantity:</strong></label>\n\n  <div class="input-group" style="width: 130px;">\n    <button class="btn btn-outline-secondary" type="button" (click)="decreaseQuantity(item)">\u2212</button>\n    <input\n      type="number"\n      min="1"\n      [(ngModel)]="item.quantity"\n      class="form-control text-center"\n    />\n    <button class="btn btn-outline-secondary" type="button" (click)="increaseQuantity(item)">+</button>\n  </div>\n</div>\n\n</div>\n\n      </div>\n\n      <!-- Update button -->\n      <!-- <div class="col-md-3 text-center">\n        <button class="btn btn-primary mt-4" (click)="updateItem(item)">\n          Update\n        </button>\n      </div> -->\n<div class="col-md-3 text-center">\n  <div class="d-flex justify-content-center align-items-center gap-2 mt-4">\n    <button class="btn btn-success" (click)="updateItem(item)">\n      Update\n    </button>\n    <button class="btn btn-outline-danger" (click)="removeItem(item)">\n      Remove \n    </button>\n  </div>\n</div>\n\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/cart/cart.css
var cart_default2;
var init_cart2 = __esm({
  "angular:jit:style:src/app/cart/cart.css"() {
    cart_default2 = "/* src/app/cart/cart.css */\n.card {\n  border-radius: 10px;\n}\n.card img {\n  max-height: 150px;\n  object-fit: cover;\n}\nh2 {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.card {\n  background-color: #1e1e1e;\n  color: #ffffff;\n}\ninput,\n.form-control {\n  background-color: #2c2c2c;\n  color: #ffffff;\n  border: 1px solid #444;\n}\nbody {\n  background-color: #000000 !important;\n  color: #ffffff;\n}\n/*# sourceMappingURL=cart.css.map */\n";
  }
});

// src/app/cart/cart.ts
var Cart;
var init_cart3 = __esm({
  "src/app/cart/cart.ts"() {
    "use strict";
    init_tslib_es6();
    init_cart();
    init_cart2();
    init_core();
    init_http();
    init_forms();
    init_common();
    Cart = class Cart2 {
      http;
      cartItems = [];
      constructor(http) {
        this.http = http;
      }
      ngOnInit() {
        this.loadCart();
      }
      loadCart() {
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        this.http.get("http://localhost:8080/buyer/cart/view", { headers }).subscribe({
          next: (res) => {
            this.cartItems = res;
            console.log(this.cartItems);
            this.cartItems.forEach((item) => {
              if (!item.quantity)
                item.quantity = 1;
            });
          },
          error: (err) => {
            console.error("Error loading cart:", err);
          }
        });
      }
      updateItem(item) {
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        const payload = {
          bookId: item.bookId,
          // Ensure this property exists in your response
          quantity: item.quantity
          // Updated quantity bound via ngModel
        };
        this.http.put("http://localhost:8080/buyer/cart/update", payload, { headers }).subscribe({
          next: () => {
            alert("Quantity updated successfully!");
            this.loadCart();
          },
          error: (err) => {
            console.error("Update failed", err);
            alert("Failed to update quantity");
          }
        });
      }
      clearCart() {
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        this.http.delete("http://localhost:8080/buyer/cart/clear", { headers }).subscribe((response) => {
          this.cartItems = [];
          alert("Cart cleared successfully");
        }, (error) => {
          console.error("Error clearing cart", error);
        });
      }
      removeItem(item) {
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        this.http.delete("http://localhost:8080/buyer/cart/remove", {
          headers,
          body: { bookId: item.bookId }
        }).subscribe({
          next: () => {
            this.cartItems = this.cartItems.filter((cart) => cart.bookId !== item.bookId);
          },
          error: (err) => {
            console.error("Error removing item:", err);
          }
        });
      }
      increaseQuantity(item) {
        item.quantity = (item.quantity || 1) + 1;
      }
      decreaseQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Cart = __decorate([
      Component({
        selector: "app-cart",
        imports: [FormsModule, CommonModule],
        template: cart_default,
        styles: [cart_default2]
      })
    ], Cart);
  }
});

// src/app/cart/cart.spec.ts
var require_cart_spec = __commonJS({
  "src/app/cart/cart.spec.ts"(exports) {
    init_testing();
    init_cart3();
    describe("Cart", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Cart]
        }).compileComponents();
        fixture = TestBed.createComponent(Cart);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_cart_spec();
//# sourceMappingURL=spec-app-cart-cart.spec.js.map
