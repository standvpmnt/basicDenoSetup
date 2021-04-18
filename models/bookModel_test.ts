import Book from "./bookModel.ts";
import { assert } from "../deps.ts";

Deno.test({
  name: "Kindle books should be less than 5 years old",
  fn(): void {
    const bookerT = new Book(
      "Robinson Crusoe",
      "Daniel Defoe",
      undefined,
      "kindle",
    );
    assert(bookerT.ageOfBook() < 5);
  },
});
