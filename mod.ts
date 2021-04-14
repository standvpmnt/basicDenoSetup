import { Application, config } from "./deps.ts";

config({safe: true});
console.log(Deno.env.get("PORT"));

const app = new Application();

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
  });
  
  // Timing
  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  });
  
  // Hello World!
  app.use((ctx) => {
    console.log(ctx);
    ctx.response.body = "Hello World!";
  });
  
  await app.listen({ port: 8000 });