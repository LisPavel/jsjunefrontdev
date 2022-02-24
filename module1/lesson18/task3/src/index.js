import "./index.css";
import img from "@assets/images/javascript.png";

const image = document.createElement("img");
image.src = img;
image.className = "js-image";

document.body.append(image);

console.log("Hello world");
