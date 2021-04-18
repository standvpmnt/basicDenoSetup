import { Context } from "../types.ts";

export const indexAction = (ctx: Context): void => {
  ctx.response.body = { "Key": "Hello World!" };
};
