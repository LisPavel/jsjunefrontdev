import "./index.css";

const clg = (...content) => console.log(...content);

clg("HelloWorld!");

const { body } = document;
const h1 = document.createElement("h1");
h1.textContent = "Hey yay!";
body.append(h1);
