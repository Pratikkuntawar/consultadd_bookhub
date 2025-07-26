
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getallusers',
  imports: [FormsModule,CommonModule],
  templateUrl: './allbookrequest.html',
  styleUrl: './allbookrequest.css'
})
export class Allbookrequest implements OnInit {
  users: any[] = [];

  ngOnInit(): void {
    // Dummy User Data
    this.users = [
      {
        id:1,
        name: 'John Doe',
        email: 'kuntawarpratik4@gmail.com',
        department: 'Coding',
        role: 'Admin'
      },
      {
        id:2,
        name: 'Jane Smith',
        email: 'ramlakhan4@gmail.com',
        department: 'Coding',
        role: 'Buyer'
      },
      {
        id:3,
        name: 'Michael Johnson',
        email: 'dhruvpatel@gmail.com',
        department: 'HR',
        role: 'Seller'
      },
      {
        id:4,
        name: 'Ram Kapoor',
        email: 'ramkapoor@gmail.com',
        department: 'HR',
        role: 'Seller'
      },
      {
        id:5,
        name: 'Rohit Sharma',
        email: 'rohitsharma@gmail.com',
        department: 'Coding',
        role: 'ADMIN'
      }
    ];
  }
  
}