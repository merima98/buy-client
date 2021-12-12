export interface Product {
    productId: string;
    name: string;
    price: number;
    shippingPrice: number;
    shippingFree: boolean;
    dateOfPublication: Date;
    dateOfModification: Date;
    deliveryTime: number;
    imageUrl: string;
    creatorId: string;
    gender: number;
    description: string;
    totalAvailableProducts: number;
    conditionId: string;
    categoryId: string;
}