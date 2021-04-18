import Book from "../models/bookModel.ts";
import { Context, Middleware } from "../types.ts";
import { dbClient } from "../db/dbConfig.ts";

export const bookIndexAction: Middleware = async (context: Context, next) => {
  const books = await dbClient.queryObject("SELECT book_id, NAME FROM BOOKS");
  dbClient.release();
  context.response.body = books.rows;
};
