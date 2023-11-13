import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0, required: true },
    image: { type: String, required: true },
    company: { type: String, required: true },
    screen: { type: String, default: null },
    processor: { type: String, default: null },
    battery: { type: String, default: null },
    lens: { type: String, default: null },
    inches: { type: Number, default: null },
    graphicCard: { type: String, default: null },
    output: { type: String, default: null },
    storage: { type: String, default: null },
    engine: { type: String, default: null },
    capacity: { type: String, default: null },
    weight: { type: String, default: null },
    connections: { type: String, default: null },
  },
  { versionKey: "" }
);

const Product = model("product", productSchema);

export default Product;
