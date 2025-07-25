
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { SignupComponent } from './signup/signup';
// import { LoginComponent } from "./login/login";
// import { FormsModule } from '@angular/forms';
// import { AuthService } from './services/auth';
// @Component({
//   selector: 'app-root',
//   imports: [RouterModule, CommonModule, HttpClientModule, SignupComponent,  LoginComponent,FormsModule],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css'],
// })
// export class App {
//   constructor(public authService: AuthService) {}
//   // showSignupModal = false;
//    isMenuOpen = false;
//   showUnauthorized = false;

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }
//   onSignupClick() {
//     this.showSignupModal = true;
//   }

//   // closeSignupModal() {
//   //   this.showSignupModal = false;
//   // }

//   handleProtectedRoute(event: Event) {
//     event.preventDefault();
//     this.showUnauthorized = true;
//   }

//   closeUnauthorized() {
//     this.showUnauthorized = false;
//   }
//   showSignupModal = false;
//   showLoginModal = false;

//   openSignupModal() {
//     this.showSignupModal = true;
//     this.showLoginModal = false;
//   }

//   openLoginModal() {
//     this.showLoginModal = true;
//     this.showSignupModal = false;
//   }

//   closeSignupModal() {
//     this.showSignupModal = false;
//   }

//   closeLoginModal() {
//     this.showLoginModal = false;
// }

// onLogout() {
//     this.authService.logout();
//   }

// }
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
