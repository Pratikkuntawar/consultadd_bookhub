import { CommonModule } from '@angular/common';
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

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'John Doe', email: 'kuntawarpratik4@gmail.com', department: 'Coding', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'ramlakhan4@gmail.com', department: 'Coding', role: 'Buyer' },
      { id: 3, name: 'Michael Johnson', email: 'dhruvpatel@gmail.com', department: 'HR', role: 'Seller' },
      { id: 4, name: 'Ram Kapoor', email: 'ramkapoor@gmail.com', department: 'HR', role: 'Seller' },
      { id: 5, name: 'Rohit Sharma', email: 'rohitsharma@gmail.com', department: 'Coding', role: 'ADMIN' }
    ];

    this.filteredUsers = [...this.users]; // Initially show all users
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

  approveRequest(id: number) {
  console.log('Approved ID:', id);
  alert("cart has been approved")
  // Call your backend API or logic to approve
}

rejectRequest(id: number) {
  console.log('Rejected ID:', id);
  alert("card has been deleted")
  // Call your backend API or logic to reject
}
}
