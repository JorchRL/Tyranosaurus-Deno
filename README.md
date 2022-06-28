# Tyranosaurus - Desktop Apps with Deno

This is my attempt at making a minimalistic Electron/Neutralino-like framework for making desktop apps with Deno.

Like Neutralino, it uses the webengine already on the user's machine. So it doesn't bundle Chromium. But unlike Neutralino, it doesn't use its own runtime, instead using Deno's. Therefore the API is very minimal, by desing. And you can use Deno's API's for things like using the filesystem.

This started as the backend of my other project, [the Birb Engine](https://github.com/JorchRL/Birb-Engine-Desktop3D-with-Deno). A 3D game engine for Deno focused on making desktop games. But in the process of making the backend test-friendly, I realized that it could just as well be a more general API, which could be used by itself.

Now I have two projects! :D

I decided to name it Tyranosaurus. Because why not!

## Usage

NOTE: it is not ready yet.

The intent is to have an `App` class that can run a webview client and a server. Then you can just write your program and use `appInstance.run()` to start the webview.

You can also register events to run injected JavaScript in the webview, and run Deno callbacks from your web app using an injected API under a `Tyrannosaurus` global object. Something like `Tyrannosaurus.exit()` could be called from your client app, which will run stuff on the backend. 

There should also be a "backend server" that can server files and handle any request you want. So you can, for example `fetch()` from localhost, without problems. I am thinking of also implementing Websocket-based messaging.

## Advantages

Unlike Electron, your app won't bundle Chromium. And unlike Neutralino, you can use Deno's API. And pretty much any Node package, if you import them from an ESM-friendly CDN!

And unlike both of them, the API is intended to be very minimal. So that may be an advantage or disadvantage, depending how you look at it :D

## Contributing

If you want to contribute, thanks! I would appreciate ideas, suggestions and issues. I would not encourage PRs yet as things are still changing very fast. I don't want people working on stuff that may not make it.

If you want to share some resources I could learn from please do! I am pretty new to software still and eager to learn. 

Please feel free to reach out to me on [twitter @jrlgs](https://twitter.com/jrlgs) 

## LICENSE

MIT. Copyright © 2022 Jorge Romero. 

Whatever, go nuts. It's yours to play around with!