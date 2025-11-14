import { Component, inject } from '@angular/core';
import { Product } from '../product-model';
import { ProductService } from '../../services/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'stn-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
   products: Observable<Product[]> = inject(ProductService).getList();

  onPriceChange(price: number): void{
    alert('Der Preis hat sich geändert: '+ price);
  }
}
