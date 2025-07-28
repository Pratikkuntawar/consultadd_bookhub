import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  imports: [FormsModule],
  templateUrl: './admin-signup.html',
  styleUrl: './admin-signup.css'
})
export class AdminSignup {
constructor(private http: HttpClient, private router: Router) {}
showModal: boolean = true;

handleClose() {
 this.router.navigate(['/admin-dashboard']);
}

  @Output() close = new EventEmitter<void>();
  @Output() switchToLogin = new EventEmitter<void>();

  signupData = {
    fullName: '',
    email: '',
    password: '',
    role: '',
    department: ''
  };

  // registerUser() {
  //   const apiUrl = 'http://localhost:8080/consultadd/admin/create-admin'; // ✅ Replace with your backend endpoint

  //   this.http.post(apiUrl, this.signupData).subscribe({
  //     next: (response) => {
  //       console.log('Registration successful:', response);
  //       alert('Registered successfully!');
  //     },
  //     error: (error) => {
  //       console.error('Registration failed:', error);
  //       alert('Registration failed. Please try again.');
  //     }
  //   });
  // }
  registerUser() {
  const apiUrl = 'http://localhost:8080/consultadd/admin/create-admin';
  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  this.http.post(apiUrl, this.signupData, { headers }).subscribe({
    next: (response) => {
      console.log('Registration successful:', response);
      alert('Registered successfully!');
      this.router.navigate(['/admin-dashboard']);
    },
    error: (error) => {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  });
}

}
