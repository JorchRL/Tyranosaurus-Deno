export const randomId = async (): Promise<string> => {
  return await crypto.randomUUID().split("-").join("") +
    await crypto.randomUUID().split("-").join("");
};

import {
  fromFileUrl,
  join,
  readableStreamFromReader as toStream,
} from "./deps.ts";

const rootPath = join(fromFileUrl(import.meta.url), "../../../dist");

export const getFile = async (
  relativePath: string,
): Promise<ReadableStream<Uint8Array> | undefined> => {
  try {
    let f;

    if (relativePath === "/") {
      console.log("(Server) File to open: ", rootPath + "/index.html");
      f = await Deno.open(rootPath + "/index.html");
    } else {
      console.log("(Server) File to open: ", rootPath + relativePath);
      f = await Deno.open(rootPath + relativePath);
    }

    return toStream(f);
  } catch (error) {
    console.log(error);
  }
};
