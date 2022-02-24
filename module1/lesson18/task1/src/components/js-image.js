import img from "@assets/images/javascript.png";
import "./js-image.css";

export const createImage = () => {
  const { body } = document;
  const image = document.createElement("img");
  image.src = img;

  image.className = "js-image";

  body.append(image);
};
