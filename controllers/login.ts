import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createCustomError } from "../errors/custom-error";
import { BadRequest } from "../errors";

dotenv.config();
const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest("please provide username and password");
  }
  if (!process.env.JWT_SECRET) {
    createCustomError(
      "JWT_SECRET is not defined in environment variables",
      400
    );
  }

  //only for testing
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

export default login;
