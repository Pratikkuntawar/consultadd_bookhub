import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'isLoggedIn';

  constructor() {
    // Set default login state from localStorage
    const storedLoginState = localStorage.getItem(this.storageKey);
    this._isLoggedIn = storedLoginState === 'true';
  }

  private _isLoggedIn: boolean = false;

  // Getter for components to access login status
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  // Call this when user logs in
  login(): void {
    this._isLoggedIn = true;
    localStorage.setItem(this.storageKey, 'true');
  }

  // Call this when user logs out
  logout(): void {
    this._isLoggedIn = false;
    localStorage.removeItem(this.storageKey);
  }
}

