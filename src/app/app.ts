import { Component, signal } from '@angular/core';
import { Product } from './product/product-model';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'stn-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports:[
    RouterOutlet,
    RouterLink,
    DatePipe,
    UpperCasePipe,
    MatToolbarModule,
  ],
})
export class App {
  protected readonly title = signal('stones');
  heute = new Date();
}
