
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup';
import { LoginComponent } from '../login/login';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SignupComponent, LoginComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  constructor( private router: Router) {}

  isMenuOpen = false;
  showUnauthorized = false;
  showSignupModal = false;
  showLoginModal = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSignupClick() {
    //this.showSignupModal = true;
   this.router.navigate(['/signup']);
  }

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

  handleProtectedRoute(event: Event) {
    event.preventDefault();
    this.showUnauthorized = true;
  }

  closeUnauthorized() {
    this.showUnauthorized = false;
  }



  movetoAllBooks(): void {
    this.router.navigate(['/allbooks']);
  }

  navigateToBooks() {
  this.router.navigate(['/allbooks']);
}
}

