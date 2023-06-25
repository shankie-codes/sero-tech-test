import { NextFunction, Request, Response } from "express";

import { recipes } from "../services";

export const get = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.json(
      await recipes.get({ search: req.query.search.toString() || null })
    );
  } catch (err) {
    console.error("Error while getting recipes", err.message);
    next(err);
  }
};

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.json(await recipes.getOne(req.params.id));
  } catch (err) {
    console.error("Error while getting recipes", err.message);
    next(err);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.json(await recipes.create(req.body));
  } catch (err) {
    console.error("Error while creating recipe", err.message);
    next(err);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.json(await recipes.remove(req.params.id));
  } catch (err) {
    console.error("Error while deleting recipe", err.message);
    next(err);
  }
};
