import React from "react";
import { render } from "react-dom";
const root = document.getElementById("root");
const virtualRoot = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Hello, world!",
    React.createElement(
      "a",
      { href: "mailto:mark@ifelse.io" },
      React.createElement("h1", {}, "React In Action"),
      React.createElement("em", {}, "...wow italics")
    )
  )
);

render(virtualRoot, root);
