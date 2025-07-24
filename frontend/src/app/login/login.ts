import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();

  handleClose() {
    this.close.emit();
  }
}
