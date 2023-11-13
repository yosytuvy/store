import usersRouter from "../users/routes/usersRouter";
import productsRouter from "../products/routes/productsRouter";
import express from "express";
const router = express.Router();

router.use("/users", usersRouter);

router.use("/products", productsRouter);

export default router;
