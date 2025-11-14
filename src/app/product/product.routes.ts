import { Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form';
import { ProductListComponent } from './product-list/product-list';
import { hasSavedGuard } from '../utils/guards/has-saved';

export const productRoutes: Routes = [{
  path: 'products',
  children: [
    {path: '', component: ProductListComponent},
    {path: 'new', component: ProductFormComponent, canDeactivate: [hasSavedGuard]},
    {path: 'new/:id', component: ProductFormComponent, canDeactivate: [hasSavedGuard]},
  ]
}];