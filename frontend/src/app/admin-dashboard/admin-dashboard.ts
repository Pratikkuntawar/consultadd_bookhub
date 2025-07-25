import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {
isMenuOpen = false;
constructor(private http: HttpClient, private router: Router) {}
movetoadminsignup(){
  this.router.navigate(['/admin-signup']);
}
toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLogout() {
    // Replace with actual auth service logout if needed
    console.log('Admin Logged Out');
    alert("Admin Logged Out");
    this.router.navigate(['/']);
  }
}
