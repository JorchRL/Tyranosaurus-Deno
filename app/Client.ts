import {
  preload,
  SizeHint,
  Webview,
} from "https://deno.land/x/webview@0.7.3/mod.ts";

interface ClientOptions {
  width: number;
  height: number;
  hint: SizeHint;
  debug: boolean;
}

/** The base class for the client. A wrapper for the webview class */
class Client {
  private webview: Webview;

  /**
   * Creates an instance of client.
   * @param [options] if not provided it will use the defaults.
   */
  constructor(options?: ClientOptions | null) {
    if (options) {
      let { width, height, hint } = options;
      this.webview = new Webview(options.debug, { width, height, hint });
    } else {
      this.webview = new Webview(true);
    }
    this.bindAPI();

    let html =
      `<html><body><h1>Open the devtools (right click) and run "tyrannosaurus.navigate("https://google.com")"</h1></body></html>`;

    this.webview.navigate(`data:text/html, ${encodeURIComponent(html)}`);

    // TODO(jorchrl): until i fix #3 i will just deal with a single "API function"
    // this.webview.bind("T_exit", () => {
    //   console.log("hi from webview");
    // });
  }

  public navigate(url: string | URL): void {
    this.webview.navigate(url);
  }

  public bindCallback(
    name: string,
    boundCallback: (...args: any) => any,
  ): void {
    this.webview.bind(name, boundCallback);
  }

  public evaluateJS(source: string) {
    this.webview.eval(source);
  }

  public run() {
    this.webview.run();
    this.webview.destroy();
  }

  /**
   * This will bind the client-side API of the library. Under window.tyrannosaurus
   */
  private bindAPI() {
    this.webview.bind("T_exit", () => {
      this.webview.destroy();
    });
    this.webview.bind("T_navigate", (url: string | URL) => {
      this.webview.navigate(url);
    });

    // We don't want our injected API to live in the global scope. So we will move them into the window.tyrannosaurus namespace
    this.webview.init(
      `window.tyrannosaurus = {
        exit: window.T_exit,
        navigate: window.T_navigate
      }

      delete T_exit
      delete T_navigate
      `,
    );

    console.log("API bound");
  }
}

export { Client, preload };
export type { ClientOptions };
