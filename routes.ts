import { Router } from "./deps.ts";
import { indexAction } from "./controllers/dashboardController.ts";

const router = new Router();

router.get("/", indexAction)
  .get("/book", (context) => {
    context.response.body = "On the books page!";
  }).get("/book/:id", (context) => {
    if (context.params?.id) {
      context.response.body =
        `The book requested by you is ${context.params.id}`;
    }
  });

router.get("/check_this_out!", (context) => {
  context.response.body =
    `This page also exists! Just imagine the possibilities now!`;
});

export default router;
