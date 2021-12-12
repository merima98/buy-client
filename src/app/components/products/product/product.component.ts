import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { getError, getShowProduct, getShowProducts, State } from '../state/product.reducer';
import * as ProductActions from "../state/product.actions";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId!: string;

  product$!: Observable<Product| null | undefined>;
  errorMessage$!: Observable<string>;

  constructor(private route: ActivatedRoute, private store: Store<State>) {

  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.productId;

    this.errorMessage$ = this.store.select(getError);
    this.product$=  this.store.select(getShowProduct);
    this.store.dispatch(ProductActions.loadProduct({productId: this.productId}));
  }

}
