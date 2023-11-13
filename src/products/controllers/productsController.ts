import { Request, Response } from "express";
import handleError from "../../utils/handleErrors";
import {
  addRatingProduct,
  getProductById,
  getProducts,
} from "../service/productsService";
import Product from "../models/mongoose/productSchema";

export const handleGetProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.send(products);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetProductById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const product = await getProductById(_id);
    res.send(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleAddRatingProduct = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const updatedProduct = await addRatingProduct(_id);
    res.send(updatedProduct);
  } catch (error) {
    handleError(res, error);
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const newProduct = new Product(product);
    console.log(newProduct);
    const response = await newProduct.save();
    console.log(response);
    if (response.errors) throw new Error("registration failed");
    res.send(response);
  } catch (error) {
    handleError(res, error);
  }
};
