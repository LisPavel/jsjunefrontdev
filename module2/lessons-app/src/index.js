import React from "react";
import reactDom from "react-dom";

const element = <h1>Hello world</h1>;

console.log(element);
reactDom.render(element, document.body.querySelector("#root"));
