import { createAction, props } from "@ngrx/store";
import { Product } from "../product.model";

export const loadProducts = createAction(
    '[Product] Load Products'
);

export const loadProductsSuccess = createAction(
    '[Product] Load Products Success',
    props<{products: Product[]}>()
);

export const loadProductsFailure = createAction(
    '[Product] Load Products Fail', 
    props<{error: string}>()
);

export const loadProduct = createAction(
    '[Product] Load Product',
    props<{productId: string}>()
);

export const loadProductSuccess = createAction(
    '[Product] Load Product Success',
    props<{product: Product}>()
);

export const loadProductFailure = createAction(
    '[Product] Load Product Faulure',
    props<{error: string}>()
);