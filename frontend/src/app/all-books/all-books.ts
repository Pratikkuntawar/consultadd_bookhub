// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-all-books',
//   imports: [],
//   templateUrl: './all-books.html',
//   styleUrl: './all-books.css'
// })
// export class AllBooks {

// }
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-books',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './all-books.html',
  styleUrls: ['./all-books.css']
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
export class AllBooks implements OnInit {
  books: any[] = [];
  filteredBooksList: any[] = []; // 🔧 Add this line
  searchQuery: string = '';
  selectedDepartment: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('http://localhost:8080/consultadd/books/getallbooks', { headers }).subscribe({
      next: (data) => {
        console.log(data);
        this.books = data;
        this.filteredBooksList = [...this.books]; 
      },
      error: (err) => {
        console.error('❌ Error fetching books:', err);
        alert('Failed to fetch books. Please check your token or try again.');
      }
    });
  }

  applyFilters() {
    const query = this.searchQuery.toLowerCase();

    this.filteredBooksList = this.books.filter(book => {
      const matchesSearch =
        !this.searchQuery ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query);

      const matchesDepartment =
        !this.selectedDepartment ||
        book.department.toLowerCase() === this.selectedDepartment.toLowerCase();

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
addToCart(bookId: number, quantity: number): void {
  const payload = {
    bookId: bookId,
    quantity: quantity
  };

  const token = localStorage.getItem('token');
  console.log("Token sent in header: ", token);

  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http.post<any[]>('http://localhost:8080/buyer/cart/add', payload, { headers }).subscribe({
    next: (res) => {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: '📚 Book added to cart successfully!',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    },
    error: (err) => {
      console.error("Error details:", err);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: '❌ Failed to add book to cart. Please try again.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    }
  });
}



}
