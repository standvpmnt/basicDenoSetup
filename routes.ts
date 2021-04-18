import { Router } from "./deps.ts";
import { indexAction } from "./controllers/dashboardController.ts";
import {
  addBookTodbAction,
  bookIndexAction,
} from "./controllers/booksController.ts";

const router = new Router();

router
  .get("/", indexAction)
  .get("/book", bookIndexAction)
  .get("/book/:id", (context) => {
    if (context.params?.id) {
      context.response.body =
        `The book requested by you is ${context.params.id}`;
    }
  })
  .get("/add_book", addBookTodbAction);

router.get("/check_this_out", (context) => {
  context.response.body =
    `This page also exists! Just imagine the possibilities now!`;
});

export default router;
