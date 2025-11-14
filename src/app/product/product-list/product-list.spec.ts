import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list';
import { ProductComponent } from '../product';
import { provideRouter, RouterLink } from '@angular/router';
import { MockProductService, ProductService } from '../../services/product';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatButtonModule,
        CommonModule,
        MatCardModule,
        ProductComponent,
        RouterLink,
        ProductListComponent,
        ProductComponent,
      ],
      providers:[{provide: ProductService, useClass: MockProductService},provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly read product list', () => {
    component.products.subscribe(products => {
      expect(products[0].id).toBe(-1);
    })
  });
});