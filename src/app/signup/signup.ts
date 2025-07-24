// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   imports: [],
//   templateUrl: './signup.html',
//   styleUrl: './signup.css'
// })
// export class Signup {

// }



// import { HttpClient } from '@angular/common/http';
// import { Component, EventEmitter, Output } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.html',
//   styleUrls: ['./signup.css']
// })
// export class SignupComponent {
//   constructor(private http: HttpClient, private router: Router) {}
//   @Output() close = new EventEmitter<void>();
//   @Output() switchToLogin = new EventEmitter<void>();

//   handleClose() {
//     this.close.emit();
//   }
 
//   moveToLoginRoute() {
//     this.router.navigate(['/login']);
//   }

//   goToLogin() {
//     this.switchToLogin.emit();
//   }
// }

//new signup


import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  constructor(private http: HttpClient, private router: Router) {}

  @Output() close = new EventEmitter<void>();
  @Output() switchToLogin = new EventEmitter<void>();

  signupData = {
    fullName: '',
    email: '',
    password: '',
    role: '',
    department: ''
  };

  handleClose() {
    this.close.emit();
  }

  goToLogin() {
    this.switchToLogin.emit();
  }

  registerUser() {
    const apiUrl = 'http://localhost:8080/api/auth/register'; // ✅ Replace with your backend endpoint

    this.http.post(apiUrl, this.signupData).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        alert('Registered successfully!');
        this.moveToLoginRoute();
      },
      error: (error) => {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    });
  }

  moveToLoginRoute() {
    this.router.navigate(['/login']);
  }
}

