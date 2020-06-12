import {
  Application,
} from "https://deno.land/x/oak@v5.0.0/mod.ts";
/**
 * @name Deno Http Testing Hack 
 */
function dhth(app: Application, port: number = 18000) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    
    descriptor.value = async function (...args: any[]) {
      //wrapping the original method
      const controller  = new AbortController();
      const { signal } = controller;
      const listenPromise = app.listen({ port, signal });

      const response = await originalMethod.apply(this, args);
       
      // The response body is not needed.
      await response.body?.cancel();
      controller.abort();
      await listenPromise;
      return response;
    }
  };
}

export default dhth;