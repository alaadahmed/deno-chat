import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World third try!";
});

await app.listen({ port: 8000 });

addEventListener("fetch", app.fetchEventHandler());
