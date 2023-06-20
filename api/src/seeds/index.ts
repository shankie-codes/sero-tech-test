import { Collection } from "mongodb";
import recipesData from "./recipes.json";
import { db } from "../services/db.service";
import { Recipe } from "types";

const recipes: Recipe[] = recipesData;

const seedCollection = async (
  collection: Collection<any>,
  seedData: any[]
): Promise<void> => {
  const count = await collection.countDocuments();
  if (count === 0) {
    await collection.insertMany(seedData);
    console.log(
      `Seeded collection ${collection.collectionName} with ${seedData.length} documents.`
    );
  }
};

export const seedCollections = async (): Promise<void> => {
  const recipesCollection = db!.collection("recipes");

  await seedCollection(recipesCollection, recipes);
};
