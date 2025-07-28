
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule ],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  constructor(private http: HttpClient, private router: Router) {}

  signupData = {
    fullName: '',
    email: '',
    password: '',
    role: '',
    department: ''
  };

  handleClose() {
   this.router.navigate(['/']); 
  }

//   registerUser() {
//     const apiUrl = 'http://localhost:8080/consultadd/auth/register'; // ✅ Replace with your backend endpoint

//     this.http.post(apiUrl, this.signupData).subscribe({
//       next: (response) => {
//         console.log('Registration successful:', response);
//         // alert('Registered successfully!');
//         Swal.fire({
//   icon: 'success',
//   title: 'Success!',
//   text: 'Regiter successfully.',
// });
//         //this.moveToLoginRoute();
//         this.router.navigate(['/login']);
//       },
//       error: (error) => {
//         console.error('Registration failed:', error);
//          alert('Registration failed. Please try again.');
//       }
//     });
//   }

// registerUser() {
//   const apiUrl = 'http://localhost:8080/consultadd/auth/register';

//   this.http.post(apiUrl, this.signupData).subscribe({
//     next: (response) => {
//       console.log('Registration successful:', response);

//       // Show success alert, then navigate to login page
//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: 'Registered successfully.',
        
//       }).then((result) => {
//         if (result.isConfirmed) {
//           this.router.navigate(['/login']);
//         }
//       });
//     },
//     error: (error) => {
//       console.error('Registration failed:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Registration Failed',
//         text: 'Please try again.',
//       });
//     }
//   });
// }
registerUser() {
  const apiUrl = 'http://localhost:8080/consultadd/auth/register';

  this.http.post(apiUrl, this.signupData).subscribe({
    next: (response) => {
      console.log('Registration successful:', response);

      // Auto-close after 2 seconds and then navigate
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Registered successfully.',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true
      }).then(() => {
        this.router.navigate(['/login']);
      });
    },
    error: (error) => {
      console.error('Registration failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Please try again.',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true
      });
    }
  });
}


  moveToLoginRoute() {
    this.router.navigate(['/login']);
  }
}

