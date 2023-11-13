import Product from "../models/mongoose/productSchema";
import ProductInterface from "../interfaces/productInterface";
import ServerError from "../../utils/serverErrorClass";

export const getProductsFromDb = async () => {
  try {
    const products = Product.find();
    if (!products) throw new ServerError(400, "products not found");
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductByIdFromDb = async (_id: string) => {
  try {
    const product = await Product.findById(_id);
    if (!product) throw new ServerError(400, "product not found");
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addRatingProductToDb = async (_id: string) => {
  try {
    const updatedProduct = Product.findByIdAndUpdate(
      _id,
      { $inc: { rating: +1 } },
      { new: true }
    );
    if (!updatedProduct) throw new ServerError(400, "product not found");
    return updatedProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductsByCategoryFromDb = async (category: string) => {
  try {
    const products = await Product.find({ category: category });
    if (!products) throw new ServerError(400, "category not found");
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};
