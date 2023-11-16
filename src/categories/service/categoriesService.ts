import ServerError from "../../utils/serverErrorClass";
import {
  getCategoriesFromDb,
  incrementCategoryRatingInDb, 
  getCategoryFromDb
} from "../dal/categoriesDal";

export const getCategories = async () => {
  try {
    return await getCategoriesFromDb(); 
  } catch (error) {
    throw new ServerError(500, "Error getting categories");
  }
};

export const incrementCategoryRating = async (category: string) => {
  try {
    return await incrementCategoryRatingInDb(category);
  } catch (error) {
    throw new ServerError(500, "Error incrementing category rating");
  }
};

export const getCategory = async (category: string) => {
  try {
    const categoryFromDb =  await getCategoryFromDb(category); 
    return categoryFromDb
  } catch (error) {
    throw new ServerError(500, "Error getting category");
  }
};