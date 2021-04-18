import { Context, Middleware } from "../types.ts";
import { log } from "../deps.ts";

export const responseTimeHeader: Middleware = async function (
  ctx: Context,
  next,
) {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};

export const requestLogger: Middleware = async function (ctx: Context, next) {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  log.debug(
    `${new Date().toString()} ${ctx.request.method} ${ctx.request.url} - ${rt}`,
  );
};
