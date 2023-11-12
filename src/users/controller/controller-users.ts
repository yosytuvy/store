import { Request, Response} from "express";


export const getAllUsers = (req:Request, res:Response) => {
    console.log('hello');
    res.status(200).send("allUsers");
}