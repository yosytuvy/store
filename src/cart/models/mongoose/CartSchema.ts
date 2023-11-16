import { Schema, model } from "mongoose";
import { ProductInCartInterface } from "../../interfaces/cartInterface";

const CartSchema = new Schema(
  {
    userId: { type: Schema.ObjectId, required: true },
    productList: { type: Array<ProductInCartInterface>, required: true },
  },
  { versionKey: "" }
);

const Cart = model("cart", CartSchema);
export default Cart