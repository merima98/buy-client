import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product.model';
import { getError, getShowProducts, State } from '../state/product.reducer';
import * as ProductActions from "../state/product.actions";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  products$!: Observable<Product[]>;
  errorMessage$!: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    //TODO unsubscribe
    // this.store.select(getShowProducts).subscribe(
    //   products=>{
    //     this.products = products;
    //     console.log('Here are my products, ', this.products);
    //   }
    // )
    this.errorMessage$ = this.store.select(getError)

    console.log('Evo me u komponenti');
    this.products$ = this.store.select(getShowProducts);
    this.store.dispatch(ProductActions.loadProducts());
  }

}
