import { displayApp } from "./displayApp";

describe("test displayApp function", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("main");
    displayApp(el);
  });

  it("All elements must be rendered", () => {
    expect(el.querySelector(".header")).toBeTruthy();
    expect(el.querySelector(".cities")).toBeTruthy();
    expect(el.querySelector(".input-form")).toBeTruthy();
    expect(el.querySelector(".button-form")).toBeTruthy();
    expect(el.querySelector(".history")).toBeTruthy();
  });
});
