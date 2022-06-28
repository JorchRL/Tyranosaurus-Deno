import { AppState, ProcessManager } from "./_App.ts";

/**
 * App
 */
export class Application {
  public client: Webview;
  private options: AppOptions;

  constructor(options: AppOptions) {
    // take client options
    this.options = options;
  }

  public run() {
    this.client.run();
    await this.server;
  }
}

interface AppOptions {
  port: number;
  width: number;
  height: number;
  sizeHint: number;
  debug: boolean;
}
