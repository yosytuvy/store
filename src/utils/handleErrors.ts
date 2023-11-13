import ServerError from "./serverErrorClass";
import { Response } from "express";

const handleError = (
    res: Response,
    error: ServerError | any,
    status: number = 400
  ) => {
    if (error instanceof ServerError)
      return res.status(error.status).send(error.message);
    if (error instanceof Error)
     return res.status(status).send(error.message);
    return res.status(status).send(`${error}`)
  };

export default handleError