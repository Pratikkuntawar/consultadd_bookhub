import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-dashboard',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './buyer-dashboard.html',
  styleUrl: './buyer-dashboard.css'
})
export class BuyerDashboard {
isMenuOpen = false;
constructor(private http: HttpClient, private router: Router) {}
seecart(){
  this.router.navigate(['/Cart']);
}
toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLogout() {
    // Replace with actual auth service logout if needed
    console.log('Buyer Logged Out');
    alert('Buyer Has Been Logged Out');
    this.router.navigate(['/']);
  }
}
