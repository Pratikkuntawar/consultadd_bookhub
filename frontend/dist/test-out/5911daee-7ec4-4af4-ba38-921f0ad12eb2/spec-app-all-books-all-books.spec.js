import {
  require_sweetalert2_all
} from "./chunk-M22DLADB.js";
import {
  Router,
  RouterModule,
  init_router
} from "./chunk-UEHRZZES.js";
import "./chunk-4H22UJ5Z.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing2
} from "./chunk-7IK4HZVL.js";
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
  __esm,
  __toESM
} from "./chunk-6TRXNEZQ.js";

// angular:jit:template:src/app/all-books/all-books.html
var all_books_default;
var init_all_books = __esm({
  "angular:jit:template:src/app/all-books/all-books.html"() {
    all_books_default = '\n\n\n<!-- <div class="book-container py-3" style="background-color: #000000">\n  <input\n    type="text"\n    class="form-control mb-4"\n    placeholder="Search by title or author"\n    [(ngModel)]="searchQuery"\n  />\n\n  <div class="book-container">\n    <div\n      class="book-card"\n      *ngFor="let book of filteredBooks()"\n      \n      style="cursor: pointer"\n    >\n      <img [src]="book.imageUrl" [alt]="book.image" class="book-image" />\n      <h3 class="text-light book-title">{{ book.title }}</h3>\n      <p class="text-light book-author">Author: {{ book.author }}</p>\n      <p class="text-light book-price">\u20B9{{ book.price }}</p>\n      <button class="btn btn-success mt-2" >Add to Cart</button>\n    </div>\n  </div>\n</div> -->\n\n\n\n<div class="book-page py-4 px-3" style="background-color: #000000; min-height: 100vh;">\n  <!-- Search and Filter Section -->\n  <div class="d-flex flex-wrap gap-3 mb-4">\n    <input\n      type="text"\n      class="form-control"\n      placeholder="Search by title or author"\n      [(ngModel)]="searchQuery"\n      style="flex: 1; min-width: 200px;"\n    />\n\n    <select\n      class="form-select"\n      [(ngModel)]="selectedDepartment"\n      style="width: 200px;"\n    >\n      <option value="">All Departments</option>\n      <option value="CODING">Coding</option>\n      <option value="MARKETING">Marketing</option>\n      <option value="SALES">Sales</option>\n      <option value="DELIVERY">Delivery</option>\n      <option value="HR">HR</option>\n    </select>\n\n    <button class="btn btn-success" (click)="applyFilters()">Search</button>\n  </div>\n\n  <!-- Book Cards Section -->\n  <div class="d-flex flex-wrap gap-4 justify-content-center">\n    <div\n      class="card p-2"\n      *ngFor="let book of filteredBooksList"\n      style="width: 250px; background-color: #1e1e1e; border: none;"\n    >\n      <img\n        [src]="book.imageUrl"\n        [alt]="book.image"\n        class="card-img-top"\n        style="height: 240px; object-fit: cover;"\n      />\n      <div class="card-body p-2">\n        <h5 class="card-title text-light mb-1">{{ book.title }}</h5>\n        <p class="text-light mb-1" style="font-size: 14px;">Author: {{ book.author }}</p>\n        <p class="text-light mb-1" style="font-size: 14px;">Price: \u20B9{{ book.price }}</p>\n\n        <!-- Quantity Input -->\n        <input\n          type="number"\n          class="form-control form-control-sm mb-2"\n          min="1"\n          [(ngModel)]="book.quantity"\n          placeholder="1"\n        />\n\n        <!-- Add to Cart Button -->\n        <button\n          class="btn btn-sm btn-success w-100"\n          (click)="addToCart(book.id, book.quantity || 1)"\n        >\n          Add to Cart\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n';
  }
});

// angular:jit:style:src/app/all-books/all-books.css
var all_books_default2;
var init_all_books2 = __esm({
  "angular:jit:style:src/app/all-books/all-books.css"() {
    all_books_default2 = "/* src/app/all-books/all-books.css */\ninput::placeholder {\n  text-align: center;\n}\n/*# sourceMappingURL=all-books.css.map */\n";
  }
});

// src/app/all-books/all-books.ts
var import_sweetalert2, AllBooks;
var init_all_books3 = __esm({
  "src/app/all-books/all-books.ts"() {
    "use strict";
    init_tslib_es6();
    init_all_books();
    init_all_books2();
    init_core();
    init_http();
    init_router();
    init_common();
    init_forms();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    AllBooks = class AllBooks2 {
      http;
      router;
      books = [];
      filteredBooksList = [];
      // 🔧 Add this line
      searchQuery = "";
      selectedDepartment = "";
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }
      ngOnInit() {
        const token = localStorage.getItem("token");
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        this.http.get("http://localhost:8080/consultadd/books/getallbooks", { headers }).subscribe({
          next: (data) => {
            console.log(data);
            this.books = data;
            this.filteredBooksList = [...this.books];
          },
          error: (err) => {
            console.error("\u274C Error fetching books:", err);
            alert("Failed to fetch books. Please check your token or try again.");
          }
        });
      }
      applyFilters() {
        const query = this.searchQuery.toLowerCase();
        this.filteredBooksList = this.books.filter((book) => {
          const matchesSearch = !this.searchQuery || book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
          const matchesDepartment = !this.selectedDepartment || book.department.toLowerCase() === this.selectedDepartment.toLowerCase();
          return matchesSearch && matchesDepartment;
        });
      }
      // addToCart(bookId: number, quantity: number): void {
      //   const payload = {
      //     bookId: bookId,
      //     quantity: quantity
      //   };
      //   const token = localStorage.getItem('token');
      //   console.log("Token sent in header: ", token);
      //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      //   this.http.post<any[]>('http://localhost:8080/buyer/cart/add', payload, { headers }).subscribe({
      //     next: (res) => alert('Book added to cart!'),
      //     error: (err) => {
      //       alert('Failed to add book to cart');
      //       console.error("Error details:", err);
      //       console.log(token)
      //     }
      //   });
      // }
      // Make sure this is at the top
      // addToCart(bookId: number, quantity: number): void {
      //   const payload = {
      //     bookId: bookId,
      //     quantity: quantity
      //   };
      //   const token = localStorage.getItem('token');
      //   console.log("Token sent in header: ", token);
      //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      //   this.http.post<any[]>('http://localhost:8080/buyer/cart/add', payload, { headers }).subscribe({
      //     next: (res) => {
      //       Swal.fire({
      //         icon: 'success',
      //         title: 'Success!',
      //         text: '📚 Book added to cart successfully!',
      //         confirmButtonColor: '#3085d6',
      //       });
      //     },
      //     error: (err) => {
      //       console.error("Error details:", err);
      //       Swal.fire({
      //         icon: 'error',
      //         title: 'Error!',
      //         text: '❌ Failed to add book to cart. Please try again.',
      //         confirmButtonColor: '#d33',
      //       });
      //     }
      //   });
      // }
      addToCart(bookId, quantity) {
        const payload = {
          bookId,
          quantity
        };
        const token = localStorage.getItem("token");
        console.log("Token sent in header: ", token);
        const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
        this.http.post("http://localhost:8080/buyer/cart/add", payload, { headers }).subscribe({
          next: (res) => {
            import_sweetalert2.default.fire({
              icon: "success",
              title: "Success!",
              text: "\u{1F4DA} Book added to cart successfully!",
              showConfirmButton: false,
              timer: 2e3,
              timerProgressBar: true
            });
          },
          error: (err) => {
            console.error("Error details:", err);
            import_sweetalert2.default.fire({
              icon: "error",
              title: "Error!",
              text: "\u274C Failed to add book to cart. Please try again.",
              showConfirmButton: false,
              timer: 2e3,
              timerProgressBar: true
            });
          }
        });
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router }
      ];
    };
    AllBooks = __decorate([
      Component({
        selector: "app-all-books",
        imports: [RouterModule, CommonModule, FormsModule],
        template: all_books_default,
        styles: [all_books_default2]
      })
      // export class AllBooksComponent implements OnInit {
      //   books: any[] = [];
      //   searchQuery: string = '';
      //   constructor(private http: HttpClient, private router: Router) {}
      //   ngOnInit(): void {
      //     const token = localStorage.getItem('token');
      //     // Replace with actual token from auth/localStorage
      //     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      //     this.http.get<any[]>('http://localhost:8080/consultadd/books/getallbooks', { headers }).subscribe({
      //       next: (data) => {
      //         this.books = data;
      //         console.log('📚 Books fetched:', this.books);
      //       },
      //       error: (err) => {
      //         console.error('❌ Error fetching books:', err);
      //         alert('Failed to fetch books. Please check your token or try again.');
      //       }
      //     });
      //   }
      // //(click)="handleBookClick(book.id)"
      //   handleBookClick(bookId: string) {
      //     this.router.navigate(['/book/', bookId]);
      //   }
      //    filteredBooks() {
      //     if (!this.searchQuery) {
      //       return this.books;
      //     }
      //     const query = this.searchQuery.toLowerCase();
      //     return this.books.filter(book =>
      //       book.title.toLowerCase().includes(query) ||
      //       book.author.toLowerCase().includes(query)
      //     );
      //   }
      // }
    ], AllBooks);
  }
});

// src/app/all-books/all-books.spec.ts
var require_all_books_spec = __commonJS({
  "src/app/all-books/all-books.spec.ts"(exports) {
    init_testing();
    init_all_books3();
    init_testing2();
    init_forms();
    describe("SignupComponent", () => {
      let component;
      let fixture;
      let httpMock;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AllBooks],
          imports: [HttpClientTestingModule, FormsModule]
        }).compileComponents();
        fixture = TestBed.createComponent(AllBooks);
        component = fixture.componentInstance;
        httpMock = TestBed.inject(HttpTestingController);
        fixture.detectChanges();
      }));
      afterEach(() => {
        httpMock.verify();
      });
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_all_books_spec();
//# sourceMappingURL=spec-app-all-books-all-books.spec.js.map
