import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "internal server error" });
};

export default errorHandler;
