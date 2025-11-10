import { Component } from '@angular/core';
import { Product } from './product-model';

@Component({
  selector: 'stn-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  product: Product = new Product(0, 'Grabstein Granit', 5, 2);

  increasePrice(): void {
    this.product.price += 5;
    alert(this.product.price);
  }
}
