/**
 * This class is the entrypoint for a Tyrannosaurus application.
 */
class Application {
  public client: Webview;
  private clientOptions: clientOptions;

  private clientWasTerminated: boolean;

  /**
   * Creates an instance of application. And initializes its webview client.
   * @param enableDebug - Whether to enable debug mode for the webview. Setting this to true will allow you to use webkit's developer tools.
   */
  constructor(enableDebug: boolean) {
    this.client = new Webview(enableDebug);
  }

  public setClientOptions(options: clientOptions) {
    this.clientOptions = options;
  }

  public sendMessage(message: string) {
  }

  public run() {
    this.client.run();
    this.clientWasTerminated = true;
  }
}

interface clientOptions {
  width: number;
  height: number;
  sizeHint: number;
  debug: boolean;
}

export { Application };
export type { clientOptions };
