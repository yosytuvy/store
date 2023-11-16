// import { Request, Response } from "express";
// import handleError from "../../utils/handleErrors";
// import {
//   addRatingCategory,
//   getCategoryById,
//   getCategories,
// } from "../service/categoriesServies";
// import Category from "../models/mongoose/categorySchema";

// export const handleGetCategories = async (req: Request, res: Response) => {
//   try {
//     const categories = await getCategories();
//     res.send(categories);
//   } catch (error) {
//     handleError(res, error);
//   }
// };

// export const handleGetCategoryById = async (req: Request, res: Response) => {
//   try {
//     const { _id } = req.params;
//     const category = await getCategoryById(_id);
//     res.send(category);
//   } catch (error) {
//     handleError(res, error);
//   }
// };

// export const handleAddRatingCategory = async (req: Request, res: Response) => {
//   try {
//     const { _id } = req.params;
//     const updatedCategory = await addRatingCategory(_id);
//     res.send(updatedCategory);
//   } catch (error) {
//     handleError(res, error);
//   }
// };
