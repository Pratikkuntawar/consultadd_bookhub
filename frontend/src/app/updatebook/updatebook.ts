
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatebook',
  imports:[FormsModule,CommonModule],
  templateUrl: './updatebook.html',
  styleUrls: ['./updatebook.css']
})
export class Updatebook implements OnInit {
  books: any[] = [];
  selectedBook: any = null;
  updatedBook: any = {
    id: '',
    title: '',
    author: '',
    department: '',
    price: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    this.http.get<any[]>('http://localhost:8080/consultadd/books/getallbooks', { headers })
      .subscribe(data => {
        this.books = data;
        console.log(data);
      });
  }

  onUpdateClick(book: any): void {
    this.selectedBook = { ...book };
    this.updatedBook = { ...book };
  }

updateBook(): void {
  if (!this.updatedBook.id) return;

  const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  
  this.http.put(
    `http://localhost:8080/consultadd/books/updatebook/${this.updatedBook.id}`,
    {
      title: this.updatedBook.title,
      author: this.updatedBook.author,
      department: this.updatedBook.department,
      price: this.updatedBook.price,
      imageUrl: this.updatedBook.imageUrl
    },
    { headers }
  ).subscribe({
    next: () => {
      alert(' Book updated successfully');
      this.fetchBooks();
      this.selectedBook = null;
    },
    error: (err) => {
      console.error('Error updating book:', err);
      alert(' Failed to update book. Please try again.');
    }
  });
}


  cancelUpdate(): void {
    this.selectedBook = null;//if selectBook becomes null then form will not rendered into the browser
  }
}
