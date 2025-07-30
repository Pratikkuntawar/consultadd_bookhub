import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buyer-dashboard',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './buyer-dashboard.html',
  styleUrl: './buyer-dashboard.css'
})
export class BuyerDashboard {
isMenuOpen = false;
constructor(private http: HttpClient, private router: Router) {}
browseallbooks(){
  this.router.navigate(['/browsebooks']);
}
requestbook(){
  this.router.navigate(['/bookrequest']);
}
toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  browsebooks(){
  console.log("Move to all books section");
  this.router.navigate(['/browsebooks']);  
  }

  viewcart(){
   this.router.navigate(['/viewcart']);  
  }

  donatebook(){
  this.router.navigate(['/donatebook']);   
  }

    onLogout() {
    console.log('Admin Logged Out');
  
    Swal.fire({
      icon: 'success',
      title: 'Logged Out',
      text: '👋 You have been logged out successfully.',
      confirmButtonColor: '#3085d6',
      timer: 2000,
      showConfirmButton: false
    }).then(() => {
      // Clear local storage and navigate after Swal closes
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('employeeId');
      this.router.navigate(['/']);
    });
  }

  visitprofile(){
    this.router.navigate(['/profile']);
  }
}
