import chai from "https://cdn.skypack.dev/chai@4.3.4?dts";
const should = chai.should();

// Integration tests for the core functionality of the library. (Application + Client classes)
import * as Tyrannosaurus from "/app/mod.ts";

// TODO(jorchrl):  before starting with the App class tests, I need to make sure I can reliably free up the resources allocated with webview.bind(). (see issue #3)

// Deno.test("Application lifecycle", async (t) => {
//   await t.step("Run and exit the app", () => {
//     const app = new Tyrannosaurus.Application();
//     app.run();
//   });
// });
