import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { Product } from './product-model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NettoPipe } from '../utils/netto-pipe';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'stn-product',
  templateUrl: './product.html',
  styleUrl: './product.css',
  imports:[
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NettoPipe,
  ],
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
