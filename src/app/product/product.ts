import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { Product } from './product-model';

@Component({
  selector: 'stn-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  styleConfig: any = {
    borderStyle: 'dashed',
  }
  product = input.required<Product>();
  priceChange = output<number>();
  showPrice = true;

  increasePrice(): void {
    this.product().price += 5;
    this.priceChange.emit(this.product().price);
  }

  changePrice(price: number){
    this.product().price = price;
    this.priceChange.emit(this.product().price);
  }

  togglePrice(){
    this.showPrice = !this.showPrice;
  }
}
