import { describe, it } from "https://deno.land/std@0.144.0/testing/bdd.ts";

describe("App:ProcessManager class implementation tests", () => {
  describe("exit()", () => {
    it("should exit (code:1) correctly when no subprocess is running", () => {
    });

    it("should exit (code:0) correctly when one or more subprocess are running ", () => {
    });

    it("should exit (code:0) only after ending all running subprocesses", () => {
    });
  });

  describe("killSubprocess()", () => {
    it("should kill (code: 0) an existing subprocess correctly.", () => {
    });

    it("should throw when kill subprocess failed (code:1)", () => {
    });

    it("should show a warning when killing a non existing subprocess (code:2)", () => {
    });
  });

  describe("restartSubprocess()", () => {
  });
});
