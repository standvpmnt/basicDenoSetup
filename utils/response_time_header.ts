import {Middleware} from "../types.ts";

export const responseTimeHeader : Middleware = async function(ctx, next) {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.response.headers.set("X-Response-Time", `${ms}ms`);
}