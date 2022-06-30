// This script is an example app for debugging and proof of concept only.

import { Application } from "./app/mod.ts";

const app = new Application();

app.run();

// Note. As of now, this is just a wrapping of the webview library. But I have injected a "tyrannosaurus" global object into the webview. So you can try openning the dev tools and running "tyrannosaurus.navigate(<some URL>)". Or "tyrannosaurus.exit()"!
