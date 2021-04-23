import express, { Application } from "express";
import { Index } from "./routes";

class App {
  public app: Application;
  public indexRoutes: Index = new Index();

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.indexRoutes.routes(this.app);
  }
}

export default new App().app;
