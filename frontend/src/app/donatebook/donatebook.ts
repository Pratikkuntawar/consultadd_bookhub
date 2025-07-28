
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-donatebook',
  imports: [FormsModule,CommonModule],
  templateUrl: './donatebook.html',
  styleUrl: './donatebook.css'
})
export class DonateBook implements OnInit {
  role=localStorage.getItem('role');
  book = {
    title: '',
    author: '',
    pdfUrl: '',
    imageUrl: '',
    department: '',
    donor: {
      id: 0,
    },
  };

  constructor(private http: HttpClient, private router: Router) {}
  
  ngOnInit(): void {
    const id=localStorage.getItem('employeeId');
    if (id) {
      this.book.donor.id = +id;
    }
  }

// submitDonation() {
//   const token = localStorage.getItem('token');
//   // const role = localStorage.getItem('role'); // assuming role is stored in localStorage

//   if (!token) {
//     alert('Please login first.');
//     return;
//   }

//   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

//   this.http
//     .post('http://localhost:8080/api/donations/donor/donate-book', this.book, { headers })
//     .subscribe({
//       next: () => {
//         alert('✅ Book donation submitted successfully!');
        
//         // Redirect based on role
//         if (this.role === 'SELLER') {
//           this.router.navigate(['/seller-dashboard']);
//         } else if (this.role === 'BUYER') {
//           this.router.navigate(['/buyer-dashboard']);
//         } else if (this.role === 'ADMIN') {
//           this.router.navigate(['/admin-dashboard']);
//         } else {
//           alert('Unknown role');
//         }
//       },
//       error: (err) => {
//         console.error(err);
//         alert('❌ Failed to donate book.');
//       },
//     });
// }

submitDonation() {
  const token = localStorage.getItem('token');

  if (!token) {
    Swal.fire({
      icon: 'warning',
      title: 'Not Logged In',
      text: 'Please login first.',
    });
    return;
  }

  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http
    .post('http://localhost:8080/api/donations/donor/donate-book', this.book, { headers })
    .subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: '✅ Book donation submitted successfully!',
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect based on role
            if (this.role === 'SELLER') {
              this.router.navigate(['/seller-dashboard']);
            } else if (this.role === 'BUYER') {
              this.router.navigate(['/buyer-dashboard']);
            } else if (this.role === 'ADMIN') {
              this.router.navigate(['/admin-dashboard']);
            } else {
              Swal.fire({
                icon: 'info',
                title: 'Unknown Role',
                text: 'Redirect failed: role not recognized.',
              });
            }
          }
        });
      },
      error: (err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Donation Failed',
          text: '❌ Failed to donate book. Please try again.',
        });
      },
    });
}


  movetobuyerdashboard() {
      if (this.role === 'SELLER') {
        this.router.navigate(['/seller-dashboard']);
      } else if (this.role === 'BUYER') {
        this.router.navigate(['/buyer-dashboard']);
      } 
      else if (this.role=='ADMIN'){
        this.router.navigate(['/admin-dashboard']);
      }else {
        alert('Unknown role');
      }
  }
}
