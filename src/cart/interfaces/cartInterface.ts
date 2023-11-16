import { ObjectId } from "mongoose";

export interface ProductInCartInterface {
    productId: ObjectId;
    quantity: number
}
export interface CartItemInterface {
    userId: ObjectId;
    products: Array<ProductInCartInterface>
}

