import { Request, Response } from "express";
import { createCustomError } from "../errors/custom-error";
import { RequestExtent } from "../common/utils";

const dashboard = (req: RequestExtent, res: Response) => {
  const { user } = req;
  try {
    if (user?.username) {
      const luckyNumber = Math.floor(Math.random() * 100);
      res.status(200).json({
        msg: `hello, ${user.username}`,
        secrete: `here is your authorized data, you lucky number is ${luckyNumber}`,
      });
    } else {
      createCustomError("user info not available", 401);
    }
  } catch (err) {
    createCustomError("not authorized to access this route", 401);
  }
};

export default dashboard;
