// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     const token = localStorage.getItem('token');

//     if (token) {
//       return true; // Allow route access
//     } else {
//       alert('You are not logged in!');
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }


import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Access Denied',
        text: 'You are not logged in!',
        timer: 2000,
        showConfirmButton: false
      });

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); // Redirect after 2 seconds

      return false;
    }
  }
}
