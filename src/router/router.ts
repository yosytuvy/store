import routerUsers from "../users/routes/usersRouter";
import express from "express";
const router = express.Router();

router.use("/users", routerUsers);

export default router;
