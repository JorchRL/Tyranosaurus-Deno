import {
  Size,
  SizeHint,
  Webview,
} from "https://deno.land/x/webview@0.7.3/mod.ts";

console.log(">>> WEBVIEW.TS: started window subprocess");

// TODO: accept arguments for window size, sizeHint and debug
const windowSize: Size = {
  width: 800,
  height: 600,
  hint: SizeHint.NONE,
};
const webview = new Webview(true, windowSize);

webview.navigate("https://localhost:5500");

bindAPI(webview);

webview.run();

console.log(">>> WEBVIEW.TS: Continuing after webview.run() yields");

function bindAPI(w: Webview) {
  // First we will bind all our api functions. They will be available in the global namespace.

  w.bind("exit", () => {
    w.destroy();
  });

  // We finish by putting all of our bound functions inside a global object. So they are namespaced. After that, we delete them from the window object.
  w.init(
    `
    window.T_API = {
      exit: window.exit
    }

    delete exit
    `,
  );
}
