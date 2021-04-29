import { Application } from "express";
import passport from "passport";
import * as UserController from "../controllers/User";
import { PassportConfiguration } from "../utils/passportConfiguration";

export class UserRoute extends PassportConfiguration {
  public routes(app: Application): void {
    app
      .route("/api/v1/users")
      .get(
        passport.authenticate("jwt", { session: false }),
        UserController.getUsers
      );

    app.route("/api/v1/users/login").post(UserController.login);

    app.route("/api/v1/users/register").post(UserController.createUser);
  }
}
