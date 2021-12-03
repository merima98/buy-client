import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';


import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { productReducer } from './state/product.reducer';
import { ProductListComponent } from './product-list/product-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEfffects } from './state/product.effects';

const productsRoutes: Routes = [
  {path: '', component: ProductListComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEfffects])
  ],
  declarations: [ProductComponent, ProductListComponent]
})
export class ProductModule { }
