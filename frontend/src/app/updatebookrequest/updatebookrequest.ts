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
  // ngOnInit(): void {
  //   this.users = [
  //     { id: 1, name: 'John Doe', email: 'kuntawarpratik4@gmail.com', department: 'Coding', role: 'Admin' },
  //     { id: 2, name: 'Jane Smith', email: 'ramlakhan4@gmail.com', department: 'Coding', role: 'Buyer' },
  //     { id: 3, name: 'Michael Johnson', email: 'dhruvpatel@gmail.com', department: 'HR', role: 'Seller' },
  //     { id: 4, name: 'Ram Kapoor', email: 'ramkapoor@gmail.com', department: 'HR', role: 'Seller' },
  //     { id: 5, name: 'Rohit Sharma', email: 'rohitsharma@gmail.com', department: 'Coding', role: 'ADMIN' }
  //   ];

  //   this.filteredUsers = [...this.users]; // Initially show all users
  // }
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

// searchUser() {
//   const url = `http://localhost:8080/api/book-requests/employee/${this.searchId}`;
//   const token = localStorage.getItem('token');
//   const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       });

//   this.http.get<any[]>(url, { headers }).subscribe(
//     data => this.filteredUsers = data,
//     error => console.error('Error fetching data:', error)
//   );
// }

// approveRequest(requestId: number) {
//   const url = `http://localhost:8080/api/book-requests/approve/${requestId}`;
//   const token = localStorage.getItem('token');
//   const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       });

//   this.http.put(url,{ headers }).subscribe(
//     () => {
//       this.filteredUsers = this.filteredUsers.filter(u => u.id !== requestId);
//       alert('Request approved!');
//     },
//     error => console.error('Error approving request:', error)
//   );
// }

// rejectRequest(requestId: number) {
//   const url = `http://localhost:8080/api/book-request/reject/${requestId}`;
//   const token = localStorage.getItem('token');
//   const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       });

//   this.http.put(url, { headers }).subscribe(
//     () => {
//       this.filteredUsers = this.filteredUsers.filter(u => u.id !== requestId);
//       alert('Request rejected!');
//     },
//     error => console.error('Error rejecting request:', error)
//   );
// }
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


  // searchUser() {
  //   const url = `http://localhost:8080/book-request/employee/${this.searchId}`;
  //   this.http.get<any[]>(url).subscribe(
  //     data => this.filteredUsers = data,
  //     error => console.error('Error fetching data:', error)
  //   );
  // }

  // approveRequest(requestId: number) {
  //   const url = `http://localhost:8080/book-request/approve/${requestId}`;
  //   this.http.put(url, {}).subscribe(
  //     () => {
  //       this.filteredUsers = this.filteredUsers.filter(u => u.id !== requestId);
  //       alert('Request approved!');
  //     },
  //     error => console.error('Error approving request:', error)
  //   );
  // }

  // rejectRequest(requestId: number) {
  //   const url = `http://localhost:8080/book-request/reject/${requestId}`;
  //   this.http.put(url, {}).subscribe(
  //     () => {
  //       this.filteredUsers = this.filteredUsers.filter(u => u.id !== requestId);
  //       alert('Request rejected!');
  //     },
  //     error => console.error('Error rejecting request:', error)
  //   );
  // }
  // searchUser(): void {
  //   if (this.searchId == null || this.searchId.toString().trim() === '') {
  //     this.filteredUsers = [...this.users]; // Show all if empty input
  //     return;
  //   }

  //   const found = this.users.filter(user => user.id === this.searchId);

  //   if (found.length > 0) {
  //     this.filteredUsers = found;
  //   } else {
  //     alert('No Result Found');
  //     this.filteredUsers = [...this.users];
  //   }
  // }

//   approveRequest(id: number) {
//   console.log('Approved ID:', id);
//   alert("cart has been approved")
//   // Call your backend API or logic to approve
// }

// rejectRequest(id: number) {
//   console.log('Rejected ID:', id);
//   alert("card has been deleted")
//   // Call your backend API or logic to reject
// }
}
