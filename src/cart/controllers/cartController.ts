import { Request, Response } from "express";
import {
  getCartByUserId,
  createCart,
  deleteCart,
  addProductToCart,
  removeProductFromCart,
  decrementProductQuantity,
  incrementProductQuantity,
} from "../service/cartService";
import handleError from "../../utils/handleErrors";

export const handleGetCartByUserId = async (req: Request, res: Response) => {
    try {
        const {userId} = req.params
        const cart = await getCartByUserId(userId)
        res.send(cart)
    } catch (error) {
        handleError(res, error);
    }
}

export const handleCreateCart = async (req: Request, res: Response) => {
  try {
    const cart = req.body;
    //validation
    const newCart = await createCart(cart);
    res.send(newCart);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleDeleteCart = async (req: Request, res: Response) => {
  try {
    const { cartId } = req.params;
    const cart = await deleteCart(cartId);
    res.send(cart);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleAddProductToCart = async (req: Request, res: Response) => {
  try {
    const { cartId } = req.params;
    const product = req.body;
    //validation
    const cart = await addProductToCart(cartId, product);
    res.send(cart);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleRemoveProductFromCart = async (
  req: Request,
  res: Response
) => {
  try {
    const { cartId, productId } = req.params;
    const cart = await removeProductFromCart(cartId, productId);
    res.send(cart);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleDecrementProductQuantity = async (
  req: Request,
  res: Response
) => {
  try {
    const { cartId, productId } = req.params;
    await decrementProductQuantity(cartId, productId);
    res.send();
  } catch (error) {
    handleError(res, error);
  }
};

export const handleIncrementProductQuantity = async (
  req: Request,
  res: Response
) => {
  try {
    const { cartId, productId } = req.params;
    await incrementProductQuantity(cartId, productId);
    res.send();
  } catch (error) {
    handleError(res, error);
  }
};
