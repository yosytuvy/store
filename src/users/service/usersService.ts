import UserInterface from "../interfaces/UserInterface";
import { comparePassword, generateUserPassword } from "../helpers/bcrypt";
import {ObjectId} from "mongoose";
import { checkUserExist, registerUserToDb } from "../dal/usersDal";
import { generateToken } from "../../helpers/authenticaition/jwt";


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

  export const login = async (user: UserInterface) => {
    try {
      const { email, password } = user;
      const userInDB = await checkUserExist(email);
      if (!userInDB) throw new Error("password or email wrong");
      const correctPassword = comparePassword(password, userInDB.password);
      if (!correctPassword) throw new Error("password or email wrong");
      const token = generateToken(userInDB);
      return token;
    } catch (error) {
      return Promise.reject(error);
    }
  };