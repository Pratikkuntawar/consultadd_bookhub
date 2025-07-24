// import { Component, signal } from '@angular/core';
// import { Router, RouterOutlet } from '@angular/router';
// import { Login } from './login/login';
// import { FormsModule } from '@angular/forms';
// import { Home } from './home/home';
// import { RouterLink } from '@angular/router';
// import { employeeService } from './service/employee-service';
// import { CookieService } from 'ngx-cookie-service';
// import { Dashboard } from './dashboard/dashboard';
// import { AuthStatusService } from './validators/AuthStatusService';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {

//   constructor(private router:Router,private authStatus:AuthStatusService,private employeeService:employeeService,private cookieService :CookieService){}

// ngOnInit() {

//   }
//   protected readonly title = signal('my-app');
  
//   isUserLoggedIn(): boolean {
//   return this.authStatus.isLoggedIn();
// }

//  logout(): void {
//     this.cookieService.delete('token');
//     this.router.navigate(['/login']);
//   }
// }
//this below app.ts is important
// import {CommonModule}  from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-root',
//    imports: [RouterModule,CommonModule,HttpClientModule],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css']
// })
// export class App{
//   isMenuOpen = false;
//   showUnauthorized = false;

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   onSignupClick() {
//     // You can navigate or emit event to parent component
//     alert("Signup clicked!");
//   }

//   handleProtectedRoute(event: Event) {
//     event.preventDefault();
//     this.showUnauthorized = true;
//   }

//   closeUnauthorized() {
//     this.showUnauthorized = false;
//   }
// }

// import { Component } from '@angular/core';
// import { SignupComponent } from "./signup/signup";
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   imports: [RouterModule, CommonModule, HttpClientModule, SignupComponent],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css'],
// })
// export class App {
//   isMenuOpen = false;
//   showUnauthorized = false;
//   showSignupModal = false;

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   onSignupClick() {
//     this.showSignupModal = true;
//   }

//   handleProtectedRoute(event: Event) {
//     event.preventDefault();
//     this.showUnauthorized = true;
//   }

//   closeUnauthorized() {
//     this.showUnauthorized = false;
//   }

//   closeSignupModal() {
//     this.showSignupModal = false;
//   }
// }
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup';
import { LoginComponent } from "./login/login";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, HttpClientModule, SignupComponent,  LoginComponent,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  // showSignupModal = false;
   isMenuOpen = false;
  showUnauthorized = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  onSignupClick() {
    this.showSignupModal = true;
  }

  // closeSignupModal() {
  //   this.showSignupModal = false;
  // }

  handleProtectedRoute(event: Event) {
    event.preventDefault();
    this.showUnauthorized = true;
  }

  closeUnauthorized() {
    this.showUnauthorized = false;
  }
  showSignupModal = false;
  showLoginModal = false;

  openSignupModal() {
    this.showSignupModal = true;
    this.showLoginModal = false;
  }

  openLoginModal() {
    this.showLoginModal = true;
    this.showSignupModal = false;
  }

  closeSignupModal() {
    this.showSignupModal = false;
  }

  closeLoginModal() {
    this.showLoginModal = false;
}
}
