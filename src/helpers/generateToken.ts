import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { IUser } from "../models/types";

config();

export const generateToken = (
  payload: Partial<IUser>,
  expires = "24h"
): string => {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: expires
  });
  return token;
};
