import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../product.model";
import * as AppState from "../../../state/app.state";
import * as ProductActions from "../state/product.actions";


export interface State extends AppState.State {
    products: ProductState;
}

export interface ProductState {
    currentProduct: Product | null;
    products: Product[];
    error: string;
}


const initialState: ProductState = {
    currentProduct: null,
    products: [],
    error: ''
}

const getProductsFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProducts = createSelector(
    getProductsFeatureState,
    state => state.products
);

export const getError = createSelector(
    getProductsFeatureState,
    state => state.error
);


export const getShowProduct = createSelector(
    getProductsFeatureState,
    state => state.currentProduct
);

export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
        return {
            ...state,
            products: action.products,
            error: ''
        };
    }),
    on(ProductActions.loadProductsFailure, (state, action): ProductState => {
        return {
            ...state,
            products: [], 
            error: action.error
        };
    }),

    on(ProductActions.loadProductSuccess, (state, action):ProductState=>{
        return {
            ...state,
            currentProduct: action.product,
            error: ''
        }
    }),

    on(ProductActions.loadProductFailure, (state, action): ProductState =>{
        return {
            ...state, 
            currentProduct: null, 
            error: action.error
        }
    })
);