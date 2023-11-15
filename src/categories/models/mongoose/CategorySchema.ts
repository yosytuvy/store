import { model, Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    category: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { versionKey: "" }
);

const Category = model("category", CategorySchema);

export default Category;
