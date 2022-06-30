import { Webview } from "https://deno.land/x/webview@0.7.3/mod.ts";

Deno.test("Webview resources", () => {
  const app = new Webview();
  app.bind("test", () => {
    console.log("test");
  });
  app.run();
  console.log(Deno.resources());

  // this test will fail because of Deno's sanitizer. There is a problem with the freeing up of unsafeCallbacks.

  // TODO(jorchrl): Fixing #3 requires this test to pass.
});
