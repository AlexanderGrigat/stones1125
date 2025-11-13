import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { ProductComponent } from './product';
import { UtilsModule } from '../utils/utils-module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductForm } from './product-form/product-form';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    ProductForm,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    UtilsModule,
    ProductRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProductComponent,
    ProductForm,
  ]
})
export class ProductModule { }
