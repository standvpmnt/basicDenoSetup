import { config, Pool } from "../deps.ts";

const POOL_CONNECTIONS = 5;
// database connection
const connectionPool = new Pool(
  {
    user: config()["user"],
    database: config()["database"],
    hostname: config()["hostname"],
    port: config()["dbport"],
  },
  POOL_CONNECTIONS,
  true,
);

export const dbClient = await connectionPool.connect();
