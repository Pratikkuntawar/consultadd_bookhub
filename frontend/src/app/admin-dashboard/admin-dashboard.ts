import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
movetoviewallusers(){
 this.router.navigate(['/admin-getallusers']); 
}
movetosearchuserbyid(){
  this.router.navigate(['/admin-searchbyid']);  
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
toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
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
