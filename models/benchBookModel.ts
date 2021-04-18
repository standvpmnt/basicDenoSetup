import { bench, runBenchmarks } from "../deps.ts";
<<<<<<< HEAD
=======
import { BenchmarkRunResult } from "../types.ts";
>>>>>>> d7486f7a10e3fc984d8b8e5316fff908dab3997e
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
<<<<<<< HEAD
      data.push(
        new Book("Cycle Ki Sawaari", "Sudarshan", 45, "paperback"),
      );
    }
    data.map((book) => ({ ...book, "ageOfBook": book.ageOfBook() }));
=======
      data.push(new Book("Cycle Ki Sawaari", "Sudarshan", 45, "paperback"));
    }
    data.map((book) => ({ ...book, ageOfBook: book.ageOfBook() }));
>>>>>>> d7486f7a10e3fc984d8b8e5316fff908dab3997e
    b.stop();
  },
});

runBenchmarks()
<<<<<<< HEAD
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
=======
  .then((results: BenchmarkRunResult) => {
    console.log(results);
  })
  .catch((error: Error) => {
>>>>>>> d7486f7a10e3fc984d8b8e5316fff908dab3997e
    // ... errors if benchmark was badly constructed.
    console.error(error);
  });
