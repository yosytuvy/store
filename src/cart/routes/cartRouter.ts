import express from "express";
import {
  handleGetCartByUserId,
  handleCreateCart,
  handleDeleteCart,
  handleAddProductToCart,
  handleRemoveProductFromCart,
  handleIncrementProductQuantity,
  handleDecrementProductQuantity,
} from "../controllers/cartController";

const router = express.Router();

router.get("/:userId", handleGetCartByUserId);

router.post("/createCart", handleCreateCart);

router.delete("/deleteCart/:cartId", handleDeleteCart);

router.post("/addProduct/:cartId", handleAddProductToCart);

router.delete("/removeProduct/:cartId/:productId", handleRemoveProductFromCart);

router.put(
  "/incrementProductQuantity/:cartId/:productId",
  handleIncrementProductQuantity
);

router.put(
  "/decrementProductQuantity/:cartId/:productId",
  handleDecrementProductQuantity
);

export default router;
