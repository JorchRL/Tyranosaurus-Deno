import { Client, ClientOptions } from "./Client.ts";

/** This class is the entrypoint for a Tyrannosaurus application. */
class Application {
  public client: Client;
  // private clientWasTerminated: boolean;

  /**
   * Creates an instance of application. And initializes its webview client.
   * @param enableDebug - Whether to enable debug mode for the webview. Allows access to webkit's dev tools
   */
  constructor(options?: ClientOptions) {
    this.client = new Client(options);
    // this.clientWasTerminated = false;
  }

  // public getClientWasTerminated(): boolean {
  //   return this.clientWasTerminated;
  // }

  public run() {
    this.client.run();
    // this.clientWasTerminated = true;
  }
}

export { Application };
