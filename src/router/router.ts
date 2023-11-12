import routerUsers from "../users/routes/router-users";
import express from "express";
const router = express.Router();

router.use("/users", routerUsers);

export default router;
