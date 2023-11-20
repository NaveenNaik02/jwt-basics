import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { RequestExtent, DecodedToken } from "../common/utils";
import { createCustomError } from "../errors/custom-error";
import { UnauthenticatedError } from "../errors";

const authentication = (
  req: RequestExtent,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("no token provided");
  }
  const token: string = authHeader?.split(" ")[1]!;
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    const { id, username } = decode;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnauthenticatedError("not authorized to access this route");
  }
};

export default authentication;
