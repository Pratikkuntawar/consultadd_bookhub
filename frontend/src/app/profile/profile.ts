
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  showDropdown = false;
  fullName = '';
  role = '';
  employeeId: string | null = '';

  constructor(private http: HttpClient, private router: Router) {
    this.fullName = localStorage.getItem('fullName') || '';
    this.role = localStorage.getItem('role') || '';
    this.employeeId = localStorage.getItem('employeeId');
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
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

    movetodashboard(){
      const role=localStorage.getItem('role');
      if(role=='SELLER'){
       this.router.navigate(['/seller-dashboard']);
      }
      else if(role=='BUYER'){
        this.router.navigate(['/buyer-dashboard']);
      }
      else if(role=='ADMIN'){
        this.router.navigate(['/admin-dashboard']);
      }
    }
}
