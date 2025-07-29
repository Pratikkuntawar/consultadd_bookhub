import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatebookrequest',
  imports: [FormsModule,CommonModule],
  templateUrl: './updatebookrequest.html',
  styleUrl: './updatebookrequest.css'
})
export class Updatebookrequest implements OnInit{
users: any[] = [];
  filteredUsers: any[] = [];
  searchId: number | null = null;
constructor(private http: HttpClient) {}
ngOnInit(): void {
  this.loadAllRequests();
}
loadAllRequests(): void {
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

//upar wala code user krna
approveRequest(donationId: number) {
  const url = `http://localhost:8080/api/book-requests/approve/${donationId}`;
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  this.http.put(url, {}, { headers }).subscribe(
    () => {
      this.users= this.users.filter(r => r.donationId !== donationId);
      alert('Request approved!');
      this.loadAllRequests();
    },
    error => console.error('Error approving request:', error)
  );
}

rejectRequest(donationId: number) {
  const url = `http://localhost:8080/api/book-requests/reject/${donationId}`;
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  this.http.put(url, {}, { headers }).subscribe(
    () => {
      this.users= this.users.filter(r => r.id !== donationId);
      alert('Request rejected!');
      this.loadAllRequests();
    },
    error => console.error('Error rejecting request:', error)
  );
}
get pendingRequests() {
  return this.filteredUsers.filter(user => user.status === 'PENDING');
}

}
