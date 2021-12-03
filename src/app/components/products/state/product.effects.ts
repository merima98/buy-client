import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as ProductActions from '../state/product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators'
import { Product } from '../product.model';
import { of } from 'rxjs';
@Injectable()
export class ProductEfffects {

    constructor(private actions$: Actions, private productService: ProductService) {


    }

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() => this.productService.getProducts()
                .pipe(
                    map((products: Product[]) =>
                        ProductActions.loadProductsSuccess({ products }),
                        catchError(error => of(ProductActions.loadProductsFailure({ error })))
                    ))
            ));
    })
}