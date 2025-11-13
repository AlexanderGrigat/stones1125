import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form';
import { ProductListComponent } from './product-list/product-list';

const routes: Routes = [{
  path: 'products',
  children: [
    {path: '', component: ProductListComponent},
    {path: 'new', component: ProductFormComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
