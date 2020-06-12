## A decorator hack for http test for deno

<p>Inspired By This Blog https://dev.to/alxtsg/avoid-leaking-resources-in-deno-tests-10e0</p>

### commands
<p>**run server**</p>
<p>deno run --allow-net run.ts</p>
<p>**run test**</p>
<p>deno test --config ./tsconfig.json --allow-net</p>

## How my solution works?
1. Start a temporary server.
2. Send api call to the server.
3. recieve data
4. assert the data
5. close the server
6. over

## Why decorator?
1. We only need to care about the api call and the result we got, ohter stuff(start server, close server), we can let the decorator funcion taking care of it.
2. Reuse the decorator function, save a lot of time.

## What missing?
1. I really want after each/before each/after all/before all function.
2. I don`t know if this solution is efficient.
3. We can not use this mothed in parallel testing. 

### PS
<p>We need tsconfig.json for the decorator,otherwise it would't work.</p>