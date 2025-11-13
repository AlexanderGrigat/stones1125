import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductListComponent } from './product-list';
import { ProductComponent } from '../product';
import { provideRouter, RouterModule } from '@angular/router';
import { UtilsModule } from '../../utils/utils-module';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
        ProductComponent,
      ],
      imports:[
        ReactiveFormsModule,
        UtilsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule,
      ],
      providers:[provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});