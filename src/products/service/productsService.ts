import {
  addRatingProductToDb,
  getProductByIdFromDb,
  getProductsFromDb,
} from "../dal/productsDal";

export const getProducts = async () => {
  try {
    const products = await getProductsFromDb();
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductById = async (_id: string) => {
  try {
    const product = await getProductByIdFromDb(_id);
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addRatingProduct = async (_id: string) => {
  try {
    await addRatingProductToDb(_id);
    return;
  } catch (error) {
    return Promise.reject(error);
  }
};
