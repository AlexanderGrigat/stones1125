import { Component, signal } from '@angular/core';
import { Product } from './product/product-model';

@Component({
  selector: 'stn-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stones');

  productParent = new Product(0, 'Grabstein Granit', 5, 2);

  onPriceChange(price: number): void {
    this.productParent.price = price;
    alert(this.productParent.price);
  }
}
