/* eslint-disable no-console */
import express, { Application } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { UserRoute } from "./routes";

config();

class App {
  public app: Application;
  public userRoutes: UserRoute = new UserRoute();
  public mongoUri: string = process.env.MONGO_CONNECTION_URI as string;

  constructor() {
    this.app = express();
    this.connectDB();
    this.app.use(express.json());
    this.userRoutes.routes(this.app);
  }

  private async connectDB() {
    try {
      await mongoose.connect(this.mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });

      console.log("MongoDB Connected...");
    } catch (err) {
      console.error(err.message);
      // Exit process with failure
      process.exit(1);
    }
  }
}

export default new App().app;
