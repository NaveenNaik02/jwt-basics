import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface DecodedToken extends JwtPayload {
  username: string;
  id: string;
}

export interface RequestExtent extends Request {
  user?: {
    id: string;
    username: string;
  };
}
