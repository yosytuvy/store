import ServerError from "../../utils/serverErrorClass";
import {
  getCartByUserIdFromDb,
  addCartToDb,
  deleteCartFromDb,
  addProductToCartInDb,
  removeProductFromCartInDb,
  incrementProductQuantityInDb,
  decrementProductQuantityInDb,
} from "../dal/cartDal";
import {
  CartItemInterface,
  ProductInCartInterface,
} from "../interfaces/cartInterface";

export const getCartByUserId = async (cartId: string) => {
  try {
    const cart = await getCartByUserIdFromDb(cartId);
    return cart;
  } catch (error) {
    throw new ServerError(400, "Error cart not found");
  }
};

export const createCart = async (cart: CartItemInterface) => {
  try {
    return await addCartToDb(cart);
  } catch (error) {
    throw new ServerError(400, "Error creating cart");
  }
};

export const deleteCart = async (cartId: string) => {
  try {
    return await deleteCartFromDb(cartId);
  } catch (error) {
    throw new ServerError(400, "Error deleting cart");
  }
};

export const addProductToCart = async (
  cartId: string,
  product: ProductInCartInterface
) => {
  try {
    return await addProductToCartInDb(cartId, product);
  } catch (error) {
    throw new ServerError(400, "Error adding product to cart");
  }
};

export const removeProductFromCart = async (
  cartId: string,
  productId: string
) => {
  try {
    return await removeProductFromCartInDb(cartId, productId);
  } catch (error) {
    throw new ServerError(400, "Error removing product from cart");
  }
};

export const incrementProductQuantity = async (
  cartId: string,
  productId: string
) => {
  try {
    return await incrementProductQuantityInDb(cartId, productId);
  } catch (error) {
    throw new ServerError(400, "Error incrementing product quantity");
  }
};

export const decrementProductQuantity = async (
  cartId: string,
  productId: string
) => {
  try {
    return await decrementProductQuantityInDb(cartId, productId);
  } catch (error) {
    throw new ServerError(400, "Error decrementing product quantity");
  }
};
