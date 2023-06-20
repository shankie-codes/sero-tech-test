import { Recipe } from "types";
import { connect } from "./db.service";
import { ObjectId } from "mongodb";

export const get = async () => {
  const db = await connect();
  return await db.collection("recipes").find({}).toArray();
};

export const getOne = async (id: string) => {
  const db = await connect();
  return await db.collection("recipes").findOne({ _id: new ObjectId(id) });
};

export const create = async (recipe: Recipe) => {
  const db = await connect();
  return (await db.collection("recipes").insertOne(recipe)).insertedId;
};

export const remove = async (id: string) => {
  const db = await connect();
  return await db.collection("recipes").deleteOne({ _id: new ObjectId(id) });
};
