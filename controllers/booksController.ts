import Book from "../models/bookModel.ts";
import { Context, Middleware } from "../types.ts";

const data = [
  new Book("Robinson Crusoe", "Daniel Defoe", undefined, "kindle"),
  new Book("Cycle Ki Sawaari", "Sudarshan", 45, "paperback"),
];

export const bookIndexAction: Middleware = (context: Context) => {
  const completeData = data.map((book) => ({
    ...book,
    "ageOfBook": book.ageOfBook(),
  }));
  context.response.body = completeData;
};
