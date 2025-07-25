import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './seller-dashboard.html',
  styleUrl: './seller-dashboard.css'
})
export class SellerDashboard {
isMenuOpen = false;
constructor(private http: HttpClient, private router: Router) {}
addnewbook(){
  this.router.navigate(['/addBook']);
}
toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLogout() {
    // Replace with actual auth service logout if needed
    console.log('Seller Logged Out');
    alert('Seller Logged Out');
    this.router.navigate(['/']);
  }
}
