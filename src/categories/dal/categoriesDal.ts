import Category from "../models/mongoose/CategorySchema";

export const getCategoriesFromDb = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const incrementCategoryRatingInDb = async (category: string) => {
  try {
    const updatedCategory = await Category.findOneAndUpdate(
      { name: category },
      { $inc: { rating: 1 } },
      { new: true }
    );
    return updatedCategory;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCategoryFromDb = async (category: string) => {
  try {
    const categoryFromDb = await Category.findOne({ name: category });
    return categoryFromDb;
  } catch (error) {
    return Promise.reject(error);
  }
};
