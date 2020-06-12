import app from "./server.ts"

const port = 8000;
console.log("Deno app is running");

await app.listen({ port });