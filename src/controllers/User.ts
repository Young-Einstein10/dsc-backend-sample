/* eslint-disable @typescript-eslint/no-empty-function */
import { Request, Response } from "express";
import { isValidEmail } from "../helpers/checkEmail";
import { generateToken } from "../helpers/generateToken";
import { comparePassword } from "../helpers/passwordManager";
import { User } from "../models";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<void> => {};

export const login = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email/Password is Invalid"
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).send({
        status: false,
        message: "Please enter a valid email address"
      });
    }

    email = email.trim();
    password = password.trim();

    // Check If Email is in DB
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        status: false,
        message: "User Not Found"
      });
    }

    // Compare User Passwords
    if (!comparePassword(password, user.password)) {
      return res.status(400).send({
        status: false,
        message: "Password Incorrect"
      });
    }

    const token = generateToken({
      id: user._id,
      role: user.role,
      claims: user.claims
    });

    return res.status(201).send({
      status: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        token
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong"
    });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {};

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {};
