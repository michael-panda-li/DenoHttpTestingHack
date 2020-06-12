import {
  assertStrictEq,
} from "https://deno.land/std@v0.51.0/testing/asserts.ts";

import dhtf from "./dhth.ts";
import app from "./server.ts";

class Test {
  @dhtf(app)
  async test1() {
    console.log("Launching in 3... 2... 1... 🚀");
    const response = await fetch('http://127.0.0.1:18000/');
    assertStrictEq(response.ok, true);
    return response;
  }
  @dhtf(app)
  async test2() {
    console.log("Launching in 3... 2... 1... 🚀");
    const response = await fetch('http://127.0.0.1:18000/');
    assertStrictEq(response.ok, true);
    return response;
  }
}

// 需要的参数 app
// fecth get result

Deno.test("server with a simple middleware", async () => {
  const t = new Test();
  await t.test1();
})

Deno.test("server with a simple middleware2", async () => {
  const t = new Test();
  await t.test2();
})