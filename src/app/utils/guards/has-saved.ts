import { CanDeactivateFn } from '@angular/router';
import { ProductFormComponent } from '../../product/product-form/product-form';

export const hasSavedGuard: CanDeactivateFn<ProductFormComponent> = 
(component) => {
  return component.hasSaved();
};