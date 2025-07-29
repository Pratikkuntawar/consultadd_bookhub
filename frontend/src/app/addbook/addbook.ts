// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-addbook',
//   imports: [],
//   templateUrl: './addbook.html',
//   styleUrl: './addbook.css'
// })
// export class Addbook {

// }
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
// import { BookType, Departments, BookCreateRequestDto } from '../models/book-create-request.dto';
// import { BookService } from '../services/book.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-addbook',
//   imports: [FormsModule,CommonModule],
//   templateUrl: './addbook.html',
//   styleUrl: './addbook.css'
// })
// export class AddBook implements OnInit {
//   bookForm!: FormGroup;
//   bookTypes = Object.values(BookType);
//   departments = Object.values(Departments);

//   constructor(private fb: FormBuilder, private bookService: BookService) {}

//   ngOnInit(): void {
//     this.bookForm = this.fb.group({
//       title: ['', Validators.required],
//       author: ['', Validators.required],
//       description: [''],
//       bookType: ['', Validators.required],
//       department: ['', Validators.required],
//       pdfUrl: [''],
//       imageUrl: [''],
//       price: [null, [Validators.required, Validators.min(0)]]
//     });
//   }

//   onSubmit(): void {
//     if (this.bookForm.valid) {
//       const bookData: BookCreateRequestDto = this.bookForm.value;

//       this.bookService.addBook(bookData).subscribe({
//         next: (res) => {
//           console.log('Response:', res);
//           alert('Book added successfully!');
//           this.bookForm.reset();
//         },
//         error: (err) => {
//           console.error('Error occurred while adding book:', err);
//           alert('Failed to add book. Please try again.');
//         }
//       });
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   }
// }






import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './addbook.html',
  styleUrl: './addbook.css'
})
export class AddBook implements OnInit {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: [''],
      bookType: ['', Validators.required],
      department: ['', Validators.required],
      pdfUrl: [''],
      imageUrl: [''],
      price: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      return;
    }

    const bookData = this.bookForm.value;


    const token = localStorage.getItem('token'); 

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.http.post<any>(
      'http://localhost:8080/consultadd/books/addbook',
      bookData,
      { headers }
    ).subscribe({
      next: (res) => {
        alert('Book added successfully!');
        console.log('Book added successfully:', res);
        //this.router.navigate(['/seller-dashboard']); 
        this.bookForm.reset();
      },
      error: (err) => {
        alert(' Failed to add book. Please try again.');
        console.error('Error while adding book:', err);
      }
    });
  }
  handleClose(){
   this.router.navigate(['/seller-dashboard']); 
  }
}
