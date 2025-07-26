// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-searchbyid',
//   imports: [FormsModule,CommonModule,HttpClientModule],
//   templateUrl: './searchbyid.html',
//   styleUrl: './searchbyid.css'
// })
// export class Searchbyid implements OnInit{
// users: any[] = [];

//   ngOnInit(): void {
//     // Dummy User Data
//     this.users = [
//       {
//         id:1,
//         name: 'John Doe',
//         email: 'kuntawarpratik4@gmail.com',
//         department: 'Coding',
//         role: 'Admin'
//       },
//       {
//         id:2,
//         name: 'Jane Smith',
//         email: 'ramlakhan4@gmail.com',
//         department: 'Coding',
//         role: 'Buyer'
//       },
//       {
//         id:3,
//         name: 'Michael Johnson',
//         email: 'dhruvpatel@gmail.com',
//         department: 'HR',
//         role: 'Seller'
//       },
//       {
//         id:4,
//         name: 'Ram Kapoor',
//         email: 'ramkapoor@gmail.com',
//         department: 'HR',
//         role: 'Seller'
//       },
//       {
//         id:5,
//         name: 'RohitfSharma',
//         email: 'rohitsharma@gmail.com',
//         department: 'Coding',
//         role: 'ADMIN'
//       }
//     ];
//   }
// }




import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
}
