# Tyranosaurus App class

This app will spawn and manage the webview client.

It will also start a local server and stablish a local host connection with the spawned webview instance.

It will also send events related to the state of the app, which can be listened else where.

## Classes

`Application` -  the main entrypoint. Holds a reference to a `Client` class
`Client` - A wrapper over `Webview`. It injects the client-side API.

#### TODO

It seems that only what is in this folder is actually necessary for having a working proof of concept. So Everything else may be deleted or moved here in the future...


  

