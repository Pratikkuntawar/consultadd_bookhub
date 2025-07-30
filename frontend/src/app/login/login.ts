import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  imports:[FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {


  loginData = {
    email: '',
    password: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

onSubmit() {
  this.http.post<any>('http://localhost:8080/consultadd/auth/login', this.loginData).subscribe({
    next: (res) => {
      console.log('Login success', res);

      // Save data to local storage
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.role);
      localStorage.setItem('employeeId', res.employeeId);
      localStorage.setItem('fullName',res.fullName);

      // Show auto-close success popup, then navigate
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Login successful.',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true
      }).then(() => {
        // Role-based navigation
        if (res.role === 'SELLER') {
          this.router.navigate(['/seller-dashboard']);
        } else if (res.role === 'BUYER') {
          this.router.navigate(['/buyer-dashboard']);
        } else if (res.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          alert('Unknown role');
          this.router.navigate(['/']);
        }
      });
    },
    error: (err) => {
      console.error('Login failed', err);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please check your credentials and try again.',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true
      });
    },
  });
}


  handleClose() {
   this.router.navigate(['/']); 
  }

  movetosignuppage(){
   this.router.navigate(['/signup']); 
  }
}
