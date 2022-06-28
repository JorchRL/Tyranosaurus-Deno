/**
 * An object representing the current state of the application
 */
export interface AppState {
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

type AppExitCode = "EXIT_SUCCESS" | "KILLED_SUBPROCESSES";

type KillSubProcessCode<P> =
  | "SUCCESS_KILL_SUBPROCESS"
  | "FAILED_KILL_SUBPROCESS"
  | "NON_EXISITNG_SUBPROCESS";

type RestartSubProcessCode<P> = "success" | "error";

export abstract class ProcessManager {
  /**
   * Terminates this app and all it's instanced processes.
   */
  public abstract exit(): void;

  /**
   * Spawns subprocess
   */
  public abstract spawnSubprocess(): void;

  /**
   * Terminates one of its instanced processes.
   * @param pid
   */
  public abstract killSubprocess(pid: number): number;

  /**
   * Restarts one of the instance's processes
   * @param pid
   */
  public abstract restartSubProcess(pid: number): number;

  /**
   * Broadcasts an event to all instances.
   */
  public abstract broadcast(): void;
}
