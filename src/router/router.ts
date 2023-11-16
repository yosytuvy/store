import usersRouter from "../users/routes/usersRouter";
import productsRouter from "../products/routes/productsRouter";
import cartsRouter from "../cart/routes/cartRouter";
import categoriesRouter from "../categories/routes/categoriesRouter";
import express from "express";
const router = express.Router();

router.use("/users", usersRouter);

router.use("/products", productsRouter);

router.use("/cart", cartsRouter);

router.use("/categories", categoriesRouter);

export default router;
