import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product-model';

@Component({
  selector: 'stn-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  @Input ({ required: true}) product!: Product;
  @Output() priceChange = new EventEmitter<number>();

  increasePrice(): void {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }
}
