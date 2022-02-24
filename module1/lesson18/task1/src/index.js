import { createImage } from "./components/js-image";
import "./index.css";

console.log("Hello world!");

const header = document.createElement("h1");
header.textContent = "I Love JavaScript";

document.body.append(header);

createImage();
