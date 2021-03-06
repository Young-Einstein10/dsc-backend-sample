import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export class PassportConfiguration {
  constructor() {
    passport.use(
      new Strategy(
        {
          secretOrKey: process.env.JWT_SECRET,
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        async (token, done) => {
          try {
            return done(null, token.user);
          } catch (error) {
            done(error);
          }
        }
      )
    );
  }
}
