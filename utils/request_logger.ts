import {Middleware} from "../types.ts";

export const requestLogger : Middleware = async function(ctx, next) {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
}