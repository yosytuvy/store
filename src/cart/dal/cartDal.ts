import {
  CartItemInterface,
  ProductInCartInterface,
} from "../interfaces/cartInterface";
import Cart from "../models/mongoose/CartSchema";

export const getCartByUserIdFromDb = async (userId: string) => {
  try {
    const cart = await Cart.findOne({ userId: userId });
    return cart;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addCartToDb = async (cart: CartItemInterface) => {
  try {
    const newCart = new Cart(cart);
    const response = await newCart.save();
    if (response.errors) throw new Error("adding cart to db failed");
    return newCart;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteCartFromDb = async (cartId: string) => {
  try {
    const response = await Cart.findByIdAndDelete(cartId);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addProductToCartInDb = async (
  cartId: string,
  product: ProductInCartInterface
) => {
  try {
    const response = await Cart.findByIdAndUpdate(
      cartId,
      { $addToSet: { productList: { $each: [product], $position: 0 } } },
      { new: true }
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const removeProductFromCartInDb = async (
  cartId: string,
  productId: string
) => {
  try {
    const response = await Cart.findByIdAndUpdate(
      cartId,
      { $pull: { productList: { productId: productId } } },
      { new: true }
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const incrementProductQuantityInDb = async (
  cartId: string,
  productId: string
) => {
  try {
    const response = await Cart.findOneAndUpdate(
      { _id: cartId, "productList.productId": productId },
      { $inc: { "productList.$.quantity": 1 } },
      { new: true }
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const decrementProductQuantityInDb = async (
  cartId: string,
  productId: string
) => {
  try {
    const response = await Cart.findOneAndUpdate(
      {
        _id: cartId,
        "productList.productId": productId,
        "productList.quantity": { $gt: 0 },
      },
      { $inc: { "productList.$.quantity": -1 } },
      { new: true }
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
