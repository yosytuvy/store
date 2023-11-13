import express from "express";
import {
  addProduct,
  handleAddRatingProduct,
  handleGetProductById,
  handleGetProducts,
} from "../controllers/productsController";

const router = express.Router();

router.get("/", handleGetProducts);

router.get("/:_id", handleGetProductById);

router.put("/addRating", handleAddRatingProduct);

router.post("/add", addProduct);

export default router;
