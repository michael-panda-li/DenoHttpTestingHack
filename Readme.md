## A decorator hack for http test for deno

<p>Inspired By This Blog https://dev.to/alxtsg/avoid-leaking-resources-in-deno-tests-10e0</p>

### commands
<p>**run server**</p>
<p>deno run --allow-net run.ts</p>
<p>**run test**</p>
<p>deno test --config ./tsconfig.json --allow-net</p>

### PS
<p>We need tsconfig.json for the decorator,otherwise it would't work.</p>