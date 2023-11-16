import { Request, Response } from "express";
import handleError from "../../utils/handleErrors";
import {
  getCategories,
  getCategory,
  incrementCategoryRating,
} from "../service/categoriesService";
export const handleGetCategories = async (req: Request, res: Response) => {
try {
    const categories = await getCategories();
    res.send(categories)
} catch (error) {
    handleError(res, error)
}
};
export const handleGetCategory = async (req: Request, res: Response) => {
    try {
        const {category} = req.params;
        const categoryFromDb = await getCategory(category);
        res.send(categoryFromDb)
    } catch (error) {
        handleError(res, error)
    }
};
export const handleIncrementCategoryRating = async (
  req: Request,
  res: Response
) => {
    try {
        const {category} = req.params; 
        const categoryFromDb = await incrementCategoryRating(category)
        res.send(categoryFromDb)
    } catch (error) {
        handleError(res, error)
    }
};
