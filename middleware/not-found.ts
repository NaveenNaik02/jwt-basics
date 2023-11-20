import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(404).json({ msg: "route not found" });
};

export default notFound;
