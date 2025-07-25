import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports:[FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  // @Output() close = new EventEmitter<void>();

  // handleClose() {
  //   this.close.emit();
  // }
  // above code is of earlier 
  @Output() close = new EventEmitter<void>();

  loginData = {
    email: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/login', this.loginData).subscribe({
      next: (res) => {
        console.log('Login success', res);
        alert('Login successful');
        this.handleClose();
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Login failed. Please check your credentials.');
      },
    });
  }

  handleClose() {
    this.close.emit();
  }
}
