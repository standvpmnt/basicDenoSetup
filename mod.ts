import { Application, config, log, send } from "./deps.ts";
import { requestLogger, responseTimeHeader } from "./utils/setup_utils.ts";

config({ safe: true });

const app = new Application();
await log.setup({
  // debug, info, warning, error, critical
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.RotatingFileHandler("DEBUG", {
      maxBytes: 10000,
      maxBackupCount: 3,
      filename: "./logs/logs.txt",
      // you can change format of output message using any keys in `LogRecord`.
      formatter: "{levelName} {msg}",
      mode: "a",
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above.
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },
  },
});

// handling error from any of the middlewares
app.addEventListener("error", (event) => {
  log.error(event.error);
});

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.body = "Internal server error";
    throw err;
  }
});

app.use(requestLogger);
app.use(responseTimeHeader);

app.use(async (ctx, next) => {
  const filePath = ctx.request.url.pathname;
  const fileWhitelist = ["/index.html", "/dynamo.html"];
  if (fileWhitelist.includes(filePath)) {
    await send(ctx, filePath, {
      root: `${Deno.cwd()}/public`,
    });
  } else {
    await next();
  }
});

// Hello World!
app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: parseInt(config()["PORT"]) });
