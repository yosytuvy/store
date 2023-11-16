import express from "express";
import {
  handleGetCategories,
  handleGetCategory,
  handleIncrementCategoryRating,
} from "../controllers/categoriesController";

const router = express.Router();

router.get("/getCategory/:category", handleGetCategory);

router.get("/", handleGetCategories);

router.put("/:category", handleIncrementCategoryRating);

export default router;
