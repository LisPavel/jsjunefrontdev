import JS_IMAGE from "@assets/images/javascript.png";
import "./js-block.css";

export class JSBlock {
  #container;
  constructor() {
    this.#container = document.createElement("div");
    this.#container.className = "js-block";
  }

  render() {
    const mainTitle = document.createElement("h1");
    mainTitle.className = "main-title";
    const image = document.createElement("img");
    image.className = "js-image";
    const foundedText = document.createElement("p");
    foundedText.className = "founded-text";

    mainTitle.textContent = "JavaScript";
    image.src = JS_IMAGE;
    foundedText.textContent = "С момента создания JavaScript прошло";

    this.#container.append(mainTitle, image, foundedText);

    return this.#container;
  }
}
