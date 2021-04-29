import { Request, Response, NextFunction } from "express";

interface IncomingReq extends Request {
  payload: any;
}

export const permissions = (
  req: IncomingReq,
  res: Response,
  next: NextFunction,
  permission: string,
  action: string
): Response | void => {
  const { payload } = req;
  if (
    !payload.claims ||
    !payload.claims[permission] ||
    !payload.claims[permission][action]
  ) {
    return res.status(403).send({
      success: false,
      message: "You do not have permission to perform this action"
    });
  }
  return next();
};
