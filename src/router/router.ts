import usersRouter from "../users/routes/usersRouter";
import productsRouter from "../products/routes/productsRouter";
import cartsRouter from "../cart/routes/cartRouter"
import express from "express";
const router = express.Router();

router.use("/users", usersRouter);

router.use("/products", productsRouter);

router.use("/cart", cartsRouter);

export default router;
