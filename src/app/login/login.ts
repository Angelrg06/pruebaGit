import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // ngModel y *ngIf
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  user = {
    email: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true; // muestra los datos ingresados
  }
}
