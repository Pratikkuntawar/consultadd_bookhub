
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-bookdetails',
  imports: [CommonModule, RouterModule],
  templateUrl: './bookdetails.html',
  styleUrls: ['./bookdetails.css']
})
export class BookDetailsComponent implements OnInit {
  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token'); // Or replace with your actual token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('http://localhost:8080/consultadd/books/getallbooks', { headers }).subscribe({
      next: (data) => {
        this.books = data;
        console.log('📚 Books fetched:', this.books);
      },
      error: (err) => {
        console.error('❌ Error fetching books:', err);
        alert('Failed to fetch books. Please check your token or try again.');
      }
    });
  }

  addToCart() {
    alert("add to cart");
  }

  addToFavorites() {
    alert("add to favorates");
  }
  
}

