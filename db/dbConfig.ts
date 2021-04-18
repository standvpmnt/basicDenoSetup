import { config, Database, PostgresConnector } from "../deps.ts";

const connector = new PostgresConnector({
  host: config()["hostname"],
  username: config()["user"],
  password: config()["password"],
  database: config()["database"],
  port: parseInt(config()["dbport"]),
});

export const db = new Database(connector);
