import { MongoClient } from "mongodb";

export const getDb = async () => {
  console.log(process.env.MONGO_URL);
  const client = new MongoClient(process.env.MONGO_URL!);
  await client.connect();
  return client.db("wish-list");
};
