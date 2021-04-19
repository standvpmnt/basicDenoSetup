import { renderFile } from "../deps.ts";
import { Context } from "../types.ts";

export const showHTMLTemplate = async (ctx: Context): Promise<void> => {
  const output = await renderFile(`${Deno.cwd()}/views/showData/main.ejs`, {});
  ctx.response.body = output;
};
