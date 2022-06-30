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
  public webview: Webview;

  /**
   * Creates an instance of client.
   * @param [options] if not provided it will use the defaults.
   */
  constructor(options?: ClientOptions | null) {
    if (options) {
      let { width, height, hint } = options;
      this.webview = new Webview(options.debug, { width, height, hint });
    } else {
      this.webview = new Webview();
    }
    // this.bindAPI();

    // TODO(jorchrl): until i fix #3 i will just deal with a single "API function"
    this.webview.bind("T_exit", () => {
      console.log("hi from webview");
    });
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
    this.webview.bind("T_dummy", () => {});

    // We don't want our injected API to live in the global scope. So we will move them into the window.tyrannosaurus namespace
    this.webview.init(
      `
      window.tyrannosaurus = {
        exit: window.T_exit,
        navigate: window.T_navigate

      }

      delete T_exit
      delete T_navigate
      `,
    );
  }
}

export { Client, preload };
export type { ClientOptions };
