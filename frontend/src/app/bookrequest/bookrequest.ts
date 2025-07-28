



import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bookrequest',
  imports: [FormsModule,CommonModule],
  templateUrl: './bookrequest.html',
  styleUrl: './bookrequest.css'
})
export class BookRequest implements OnInit{
  role=localStorage.getItem('role');
  bookRequest = {
    title: '',
    author: '',
    reason: '',
    requesterId: '',
  };

  constructor(private http: HttpClient, private router: Router) {}
  
  ngOnInit(): void {
    const id = localStorage.getItem('employeeId');
    if (id) {
      this.bookRequest.requesterId = id;
    }
  }

movetobuyerdashboard(){
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

//   submitRequest() {
//     const token = localStorage.getItem('token'); // or sessionStorage if you're storing it there
//     const id=localStorage.getItem('employeeId');
//     console.log("Requester Id",id);
   
//     if (!token) {
//       alert('Token not found. Please login.');
//       return;
//     }

//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

//     this.http
//       .post('http://localhost:8080/api/book-requests/create-bookrequest', this.bookRequest, { headers })
// .subscribe({
//       next: () => {
//         alert('✅ Book request submitted successfully!');
//          if (this.role === 'SELLER') {
//           this.router.navigate(['/seller-dashboard']);
//         } else if (this.role === 'BUYER') {
//           this.router.navigate(['/buyer-dashboard']);
//         } else if (this.role === 'ADMIN') {
//           this.router.navigate(['/admin-dashboard']);
//         } else {
//           alert('Unknown role');
//         } // 🔁 replace with your actual route
//       },
//       error: (err) => {
//         console.error(err);
//         alert('❌ Failed to submit book request.');
//       },
//     });
//   }
submitRequest() {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('employeeId');
  console.log("Requester Id", id);

  if (!token) {
    Swal.fire({
      icon: 'warning',
      title: 'Authentication Required',
      text: 'Please login to continue.',
    });
    return;
  }

  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http
    .post('http://localhost:8080/api/book-requests/create-bookrequest', this.bookRequest, { headers })
    .subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: '✅ Book request submitted successfully!',
        }).then(() => {
          // Navigate only after clicking "OK"
          if (this.role === 'SELLER') {
            this.router.navigate(['/seller-dashboard']);
          } else if (this.role === 'BUYER') {
            this.router.navigate(['/buyer-dashboard']);
          } else if (this.role === 'ADMIN') {
            this.router.navigate(['/admin-dashboard']);
          } else {
            Swal.fire('Unknown role', '', 'error');
          }
        });
      },
      error: (err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: '❌ Failed to submit book request.',
        });
      },
    });
}

}
