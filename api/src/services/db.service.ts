import { MongoClient, Db } from "mongodb";
import { seedCollections } from "../seeds/index";

const url = "mongodb://mongo:27017";
const dbName = "recipe-book";

let client: MongoClient | null = null;
export let db: Db | null = null;

export const connect = async (): Promise<Db> => {
  if (!client) {
    client = await MongoClient.connect(url);
    db = client.db(dbName);

    // Seed collections if needed
    await seedCollections();
  }

  return db!;
};

export const disconnect = (): void => {
  if (client) {
    client.close();
    client = null;
    db = null;
  }
};
