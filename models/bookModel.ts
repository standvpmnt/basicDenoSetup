export default class Book {
  name: string;
  author: string;
  pages: number | undefined;
  type: string;

  constructor(
    name: string,
    author: string,
    pages: number | undefined,
    type: "paperback" | "hard-back" | "kindle",
  ) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.type = type;
  }

  ageOfBook(): number {
    if (this.type === "kindle") {
      return 2;
    } else if (this.type === "hard-back") {
      return 5;
    } else {
      return 10;
    }
  }
}
