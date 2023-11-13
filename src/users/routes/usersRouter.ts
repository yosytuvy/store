import express from "express";
import {
  handleGetUsers,
  handleLogin,
  handleUserRegistration,
} from "../controller/usersController.ts";
const router = express.Router();

router.get("/getUsers", handleGetUsers);

router.post("/signup", handleUserRegistration);

router.post("/login", handleLogin);

export default router;
