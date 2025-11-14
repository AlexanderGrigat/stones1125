import { Component, inject } from '@angular/core';
import { Product } from '../product-model';
import { ProductService } from '../../services/product';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ProductComponent } from '../product';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  imports: [
    MatButtonModule,
    CommonModule,
    MatCardModule,
    ProductComponent,
    RouterLink,
  ],
})
export class ProductListComponent {
   products: Observable<Product[]> = inject(ProductService).getList();

  onPriceChange(price: number): void{
    alert('Der Preis hat sich geändert: '+ price);
  }
}
