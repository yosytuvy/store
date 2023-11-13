import { Request, Response} from "express";
import handleError from "../../utils/handleErrors";
import UserInterface from "../interfaces/UserInterface";
import ServerError from "../../utils/serverErrorClass";
import { registerUser } from "../service/usersService";
import userValidation from "../models/joi/userValidation";


export const handleGetUsers = (req:Request, res:Response) => {
    console.log('hello');
    res.status(200).send("allUsers");
};

export const handleUserRegistration = async (req: Request, res: Response) => {
    try {
      const user: UserInterface = req.body;
      const { error } = userValidation(user);
      if (error?.details[0].message) throw new ServerError(400, error?.details[0].message);
      const userFromDB = await registerUser(user);
      return res.status(201).send(userFromDB);
    } catch (error) {
      handleError(res, error)
    }
  };
  