import { Application, config } from "./deps.ts";
import {responseTimeHeader} from "./utils/response_time_header.ts";
import {requestLogger} from "./utils/request_logger.ts";

config({safe: true});

const app = new Application();
app.use(requestLogger);
app.use(responseTimeHeader);
  
// Hello World!
app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: parseInt(config()["PORT"]) });