import { Component } from '@angular/core';
import { Login } from './login/login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,        // Componente raíz standalone
  imports: [Login, CommonModule], // Importa login y CommonModule para directivas
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
