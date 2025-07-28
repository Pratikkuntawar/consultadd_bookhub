import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './seller-dashboard.html',
  styleUrl: './seller-dashboard.css'
})
export class SellerDashboard {
isMenuOpen = false;
constructor(private http: HttpClient, private router: Router) {}
addbook(){
  this.router.navigate(['/addBook']);
}
movetoviewalldonations(){
  this.router.navigate(['/admin-getalldonations']); 
}
movetoupdatedonations(){
  this.router.navigate(['/admin-updatedonations']); 
}
movetoviewallbookrequest(){
 this.router.navigate(['/admin-movetoviewallbookrequest']);  
}
movetoupdatebookrequest(){
 this.router.navigate(['/admin-movetoupdatebookrequest']);  
}
donatebook(){
  this.router.navigate(['/donatebook']);   
}
updatebook(){
 this.router.navigate(['/updateBook']); 
}
toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // onLogout() {
  //   // Replace with actual auth service logout if needed
  // console.log('Seller Logged Out');
  // alert('Seller Logged Out');
  // localStorage.removeItem('token');
  // localStorage.removeItem('role');
  // localStorage.removeItem('employeeId');
  // this.router.navigate(['/']);
  // }
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
}
