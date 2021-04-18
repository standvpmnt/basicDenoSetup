import { bench, runBenchmarks } from "../deps.ts";
import Book from "./bookModel.ts";

bench({
  name: "runs100ForIndexActionOfBooks1e3",
  runs: 100,
  func(b): void {
    b.start();
    const data = [];
    for (let i = 0; i < 1e3; i++) {
      data.push(
        new Book("Robinson Crusoe", "Daniel Defoe", undefined, "kindle"),
      );
      data.push(
        new Book("Cycle Ki Sawaari", "Sudarshan", 45, "paperback"),
      );
    }
    data.map((book) => ({ ...book, "ageOfBook": book.ageOfBook() }));
    b.stop();
  },
});

runBenchmarks()
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    // ... errors if benchmark was badly constructed.
    console.error(error);
  });
