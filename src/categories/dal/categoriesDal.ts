import Category from "../models/mongoose/CategorySchema";

export const getCategoriesFromDb = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const incrementCategoryRating = async (category: string) => {
  try {
    const updatedCategory = await Category.findOneAndUpdate(
      { category: category },
      { $inc: { rating: 1 } },
      { new: true }
    );
    return updatedCategory
  } catch (error) {
    return Promise.reject(error);
  }
};
