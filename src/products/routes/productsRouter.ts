import express from "express";
import {
  addProduct,
  handleAddRatingProduct,
  handleGetProductById,
  handleGetProducts,
  handleGetProductsByCategory,
} from "../controllers/productsController";

const router = express.Router();

router.get("/", handleGetProducts);

router.get("/id/:_id", handleGetProductById);

router.get("/category/:category", handleGetProductsByCategory)

router.put("/:_id", handleAddRatingProduct);

router.post("/add", addProduct);

export default router;
