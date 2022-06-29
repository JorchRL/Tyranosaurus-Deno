# File Server

This is a simple localhost file server. In case the webview needs to `fetch()` local files, it should do so from here.

A typical usage would look something like:

```ts
const getAssetFileURL = (relativePath:string) => {
  return `https://localhost:${PORT}/${relativePath}`
  }

// your app code...

const asset = fetch(getAssetFileURL("assets/someImg.png"))

```

Then the server will look for the file under the directory it is configured to look at. And send it back to the webview. I could also send a request for a reload to the App class.

