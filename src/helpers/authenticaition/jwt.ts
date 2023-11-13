import jwt from "jsonwebtoken";
import UserInterface from "../../users/interfaces/UserInterface";
import dotenv from "dotenv";

dotenv.config();

const { JWT_SECRET } = process.env;

export const generateToken = (_id: string) => {
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");
  const token = jwt.sign({ _id }, JWT_SECRET, { expiresIn: "1h" });
  return token;
};

export const verifyToken = (token: string) => {
  try {
    if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");
    const userPayload = jwt.verify(token, JWT_SECRET);
    return userPayload;
  } catch (error) {
    return null;
  }
};
