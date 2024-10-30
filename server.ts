import { Application, Router } from "@oak/oak";

const router = new Router();
// ctx means context
router
  .get("/", (ctx) => {
    ctx.response.body = `<!DOCTYPE html>
      <html>
        <head><title>Hello oak!</title><head>
        <body>
          <h1>Hello oak!</h1>
        </body>
      </html>
    `;
  })
  .get("/plop", (ctx) => {
    ctx.response.body = "PLOP";
  });

const app = new Application();

// Logger
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

const port = 8001;

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on http://localhost:${port}`);

app.listen({ port: port });
