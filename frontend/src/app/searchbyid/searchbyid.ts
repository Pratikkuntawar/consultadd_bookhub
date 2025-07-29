
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-searchbyid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchbyid.html',
  styleUrl: './searchbyid.css'
})
export class Searchbyid implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchId: number | null = null;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const apiUrl = 'http://localhost:8080/consultadd/admin/employees';

    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      this.http.get<any[]>(apiUrl, { headers }).subscribe({
        next: (data) => {
          console.log('Fetched Employees:', data);
          this.users = data;
          this.filteredUsers = [...this.users]; // Initially show all users
        },
        error: (error) => {
          console.error('Failed to fetch employees:', error);
        }
      });
    } else {
      console.warn('No token found. Please login first.');
    }
  }
    searchUser(): void {
    if (this.searchId == null || this.searchId.toString().trim() === '') {
      this.filteredUsers = [...this.users]; // Show all if empty input
      return;
    }

    const found = this.users.filter(user => user.id === this.searchId);

    if (found.length > 0) {
      this.filteredUsers = found;
    } else {
      alert('No Result Found');
      this.filteredUsers = [...this.users];
    }
  }
}





