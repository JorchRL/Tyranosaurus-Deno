import { describe, it } from "https://deno.land/std@0.144.0/testing/bdd.ts";

// these are mostly integration tests (i think) for the core functionality of the library. All the main functionality involves a combination of the Application class and the client class (also the server). So I find it hard to think of unit tests for this.

describe("Tyrannosaurus.App class - core functionality", () => {
  it("should create an app instance with a webview field initialized in the constructor", () => {
  });
  it("should set the clientOptions", () => {
  });
  it("should run and terminate the client correctly (via a bound callback)", () => {
    // I am testing two things here, but there is not really any other way to automate this. As far as i know. Anyways, I still need to test the binding of callbacks, which is part of the core functionality. That is, the App class should never run a webview without at least the terminate() callback.
  });
});

describe("Tyrannosaurus.App - messaging with the client", () => {
  it("should send a message to the client and get a response", () => {
  });
});

describe("Tyrannosaurus.App - running the file server", () => {
});
