import express from "express";
import { get, getOne, create, remove } from "../controllers/recipes";

export const recipesRouter = express.Router();

recipesRouter.get("/", get);

recipesRouter.get("/:id", getOne);

recipesRouter.post("/", create);

recipesRouter.delete("/:id", remove);
