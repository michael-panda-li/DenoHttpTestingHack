import {
  Application,
} from "https://deno.land/x/oak@v5.0.0/mod.ts";

const app = new Application();
app.use(async (ctx) => {
  ctx.response.body = 'Hello world.';
});

export default app;