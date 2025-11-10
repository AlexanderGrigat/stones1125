import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { Product } from './product-model';

@Component({
  selector: 'stn-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  // @Input ({ required: true}) product!: Product;
  product = input.required<Product>();
  // @Output() priceChange = new EventEmitter<number>();
  priceChange = output<number>();

  increasePrice(): void {
    this.product().price += 5;
    this.priceChange.emit(this.product().price);
  }
}
