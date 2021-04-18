import Book from "../models/bookModel.ts";
import { Context } from "../types.ts";
import BookD from "../models/bookModelDB.ts";
import { v4 } from "../deps.ts";

const data = [
  new Book("Robinson Crusoe", "Daniel Defoe", undefined, "kindle"),
  new Book("Cycle Ki Sawaari", "Sudarshan", 45, "paperback"),
];

export const bookIndexAction = (context: Context) => {
  const completeData = data.map((book) => ({
    ...book,
    ageOfBook: book.ageOfBook(),
  }));
  context.response.body = completeData;
};

export const addBookTodbAction = async (context: Context) => {
  try {
    await BookD.create([
      {
        id: v4.generate(),
        name: "Robinson Crusoe",
        page_count: 55,
        type: "hard-back",
      },
    ]);
    context.response.body = { message: "Resource created successfully!" };
    context.response.status = 201;
  } catch (err) {
    context.response.body = "Internal Server Error";
    console.error(err);
  }
};
