import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductosComponent } from './productos/productos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, ProductosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}