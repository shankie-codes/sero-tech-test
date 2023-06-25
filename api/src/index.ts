import { json, urlencoded } from "body-parser";

import cors from "cors";
import express, { Request, Response } from "express";
import { disconnect } from "./services/db.service";
import { recipesRouter } from "./routes";

const app = express();

export class Application {
  constructor() {
    this.setupApplicationSettings();
    this.setupRoutes();
  }

  setupApplicationSettings() {
    app.use(cors());
    app.use(urlencoded({ extended: false }));
    app.use(json());
  }

  listen() {
    app.listen(3080, () => console.log("Listening on port 3080"));
  }

  setupRoutes() {
    app.use("/recipes", recipesRouter);
    app;
  }
}

const application = new Application();

application.listen();

process.on("SIGINT", () => {
  disconnect();
  process.exit(0);
});
