import UserSchema from "../models/mongoose/UserSchema";
import UserInterface from "../interfaces/UserInterface";

export const checkUserExist = async (email: string) => {
  try {
    const check = await UserSchema.findOne({ email: email });
    return check;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerUserToDb = async (user: UserInterface) => {
  try {
    const newUser = new UserSchema(user);
    const response = await newUser.save();
    if (response.errors) throw new Error("registration failed");
    return newUser;
  } catch (error) {
    return Promise.reject(error);
  }
};
