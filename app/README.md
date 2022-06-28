# Tyranosaurus App class

This app will spawn and manage all webview subprocesses.

It will also start a local server and stablish a local host connection with the spawned webview instance.

It will also send events related to the state of the app, which can be listened else where.

## Classes

#### ProcessManager<P>
Uses `Deno.run` internally to spawn a subprocess. 
  | Method     | Description |
  |------- | --------------- | 
  | + `exit(): exitCode` | Exits the app |
  | + `spawnSubprocess() => pid:number \| null` |   Spawns a new subprocess and returns its pid if successful |
  | + killSubprocess()    | Exits  |
  | + `restartSubprocess( pid: number )` | Exits a subprocess and spawns a new one to replace it |
  | + broadcastMessage() | Sends a message to all instances |
  |+ sendMessage()| Sends a message to an instance|
  

#### App
  
 | Method    | input    | output    | Description |
  |---------------- | --------------- | --------------- | ----- | 
  | - emitEvent() | Exits the app |
  
  