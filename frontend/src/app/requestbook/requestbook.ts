import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-requestbook',
  imports: [FormsModule,CommonModule],
  templateUrl: './requestbook.html',
  styleUrl: './requestbook.css'
})
export class Requestbook {
bookRequest = {
  title: '',
  author: '',
  reason: '',
  requesterId: 0
};

employees: any[] = [];

constructor(private http: HttpClient) {}
submitRequest() {
  const requestPayload = {
    title: this.bookRequest.title,
    author: this.bookRequest.author,
    reason: this.bookRequest.reason,
    requester: { id: this.bookRequest.requesterId }
  };

  this.http.post('http://localhost:8080/api/book-requests', requestPayload).subscribe(
    res => alert('Book Requested!'),
    err => alert('Failed to submit request')
  );
}
}
