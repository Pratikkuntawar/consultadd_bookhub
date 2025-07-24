
import {CommonModule}  from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
   imports: [RouterModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  showUnauthorized = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSignupClick() {
    // You can navigate or emit event to parent component
    alert("Signup clicked!");
  }

  handleProtectedRoute(event: Event) {
    event.preventDefault();
    this.showUnauthorized = true;
  }

  closeUnauthorized() {
    this.showUnauthorized = false;
  }
}
