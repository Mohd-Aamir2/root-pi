import { MongoClient, type Db } from 'mongodb';

declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: Promise<MongoClient> | undefined;
}

// Connect lazily and reuse one connection, so each request stays fast.
export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');
  if (!global._mongoClient) global._mongoClient = new MongoClient(uri).connect();
  const client = await global._mongoClient;
  return client.db(process.env.MONGODB_DB || 'aiangel');
}