import {Middleware, Context} from "../types.ts";
import {logger} from "../mod.ts";
import {cyan} from "../deps.ts";

export const responseTimeHeader : Middleware = async function(ctx: Context, next) {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.response.headers.set("X-Response-Time", `${ms}ms`);
}

export const requestLogger : Middleware = async function(ctx: Context, next) {
	await next();
	const rt = ctx.response.headers.get("X-Response-Time");
	logger.debug(`${new Date().toString()} ${cyan(ctx.request.method)} ${ctx.request.url} - ${rt}`);
}