interface AppState {
  shouldExit: boolean;
  hasInitialized: boolean;
  clientInfo: {
    isRunning: boolean;
    pid: number | null;
  };
  serverIsRunning: {
    isRunning: boolean;
    pid: number | null;
  };
}

/**
 * App
 */
class App {
  declare serverProcess: Deno.Process;
  declare clientProcess: Deno.Process;

  private state: AppState;

  /**
   * Creates an instance of app.
   */
  constructor() {
    this.state = {
      shouldExit: false,
      hasInitialized: false,
      clientInfo: {
        isRunning: false,
        pid: null,
      },
      serverIsRunning: {
        isRunning: false,
        pid: null,
      },
    };
  }

  /**
   * Kills one of the subprocess, if they exist.
   * @param processtype
   * @returns
   */
  public killSubprocess(processtype: "client" | "server") {
    if (!this.serverProcess.pid || !this.clientProcess.pid) {
      throw new Error("No subprocess has been spawned");
    }
    let pid: number | null = null;
    let returnObj = {
      result: null,
    };

    switch (processtype) {
      case "client":
        try {
          pid = this.clientProcess.pid;
          this.clientProcess.kill("SIGTERM");
          this.clientProcess.close();
        } catch (error) {
          return 0;
        }
        return { result: 1, processKilled: "client", pid: pid };
      case "server":
        try {
          this.serverProcess.kill("SIGTERM");
          this.serverProcess.close();
        } catch (error) {
          return 0;
        }
        return 1;
      default:
        return 0;
    }
  }

  /**
   * Exits app
   */
  public exit() {
    if (this.clientProcess.pid) this.killSubprocess("client");
    if (this.serverProcess.pid) this.killSubprocess("server");
    Deno.exit(1);
  }

  /**
   * Shoudls exit
   * @returns exit
   */
  public async shoudlExit(): Promise<void> {
    await this.getShouldExit();
    return new Promise((resolve, reject) => {
      if (this.state.shouldExit) resolve();
    });
  }

  /**
   * Gets should exit
   */
  private async getShouldExit() {
    // here we await for both the client and server to finish, then we can mark the app for termination (ie this.state.shoudlExit)

    await this.clientProcess.status();
  }

  /**
   * Runs app
   */
  public run() {
    const clientScript = "/lib/T-App/webview/webview.ts";
    const serverScript = "/lib/T_App/server/server.ts";

    const clientCmd = ["deno", "run", "-A", "--unstable", clientScript];
    const serverCmd = ["deno", "run", "-A", "--unstable", serverScript];

    this.serverProcess = Deno.run({ cmd: serverCmd, cwd: "./" });
    this.clientProcess = Deno.run({ cmd: clientCmd, cwd: "./" });
  }
}

export { App };
