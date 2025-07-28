
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-getallusers',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './allbookrequest.html',
  styleUrl: './allbookrequest.css'
})
export class Allbookrequest implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.http.get<any[]>('http://localhost:8080/api/book-requests/all').subscribe(
  //     (response) => {
  //       this.users = response.map(request => ({
  //         id: request.requester?.id,
  //         name: request.requester?.fullName,
  //         email: request.requester?.email,
  //         department: request.requester?.department,
  //         role: request.requester?.role
  //       }));
  //     },
  //     (error) => {
  //       console.error('Error fetching book requests:', error);
  //     }
  //   );
  // }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const apiUrl = 'http://localhost:8080/api/book-requests/all';
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      this.http.get<any[]>(apiUrl, { headers }).subscribe({
        next: (data) => {
          console.log('Fetched Employees:', data);
          this.users = data;
        },
        error: (error) => {
          console.error('Failed to fetch employees:', error);
        }
      });
    } else {
      console.warn('No token found. Please login first.');
    }
  }
}
