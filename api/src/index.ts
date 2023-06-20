import { json, urlencoded } from "body-parser";

import cors from "cors";
import express, { Request, Response } from "express";
import { Db } from "mongodb";
import { connect, disconnect } from "./mongoConnection";

// import { Db, MongoClient } from "mongodb";

const app = express();

export class Application {
  constructor() {
    this.setupApplicationSettings();
    // this.setupDatabase();
    this.setupControllers();
  }

  setupApplicationSettings() {
    app.use(cors());
    app.use(urlencoded({ extended: false }));
    app.use(json());
  }

  listen() {
    app.listen(3080, () => console.log("Listening on port 3080"));
  }

  // async setupDatabase() {

  // }

  // async setupDatabase() {
  //   // const adapter = new JSONFile("./db.json");
  //   // const defaultData: Record<string, Array<any>> = { recipes: [] };
  //   // this.db = new Low(adapter, defaultData);
  //   const url = "mongodb://mongo:27017";
  //   const client = new MongoClient(url);

  //   let conn;
  //   try {
  //     conn = await client.connect();
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   app.db = conn.db("recipe_book");
  // }

  setupControllers() {
    app.get("/recipes", async (req: Request, res: Response) => {
      try {
        const db: Db = await connect();
        const recipes = await db.collection("recipes").find().toArray();

        res.json(recipes);
      } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Internal Server Error");
      }
    });
    app.get("/recipes/:id", (req: Request, res: Response) => {
      res.status(200).send("");
    });
    app.post("/recipes", (req: Request, res: Response) => {
      res.status(200).send("");
    });
    app.delete("/recipes/:id", (req: Request, res: Response) => {
      res.status(200).send("");
    });
    app;
  }
}

const application = new Application();

application.listen();

process.on("SIGINT", () => {
  disconnect();
  process.exit(0);
});
