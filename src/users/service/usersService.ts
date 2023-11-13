import UserInterface from "../interfaces/UserInterface";
import { comparePassword, generateUserPassword } from "../helpers/bcrypt";
import {ObjectId} from "mongoose";
import { checkUserExist, registerUserToDb } from "../dal/usersDal";


export const registerUser = async (user: UserInterface) => {
    try {
      const { email, password } = user;
      const userExist = await checkUserExist(email);
      if (userExist) throw new Error("user already exist");
      user.password = generateUserPassword(password);
      const newUser = registerUserToDb(user);
      return newUser;
    } catch (error) {
      return Promise.reject(error);
    }
  };