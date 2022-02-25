import { createElement } from "../../core/utils/create-element";

import { getRandomColor } from "../../core/utils/random";

export default function initApp() {
  console.log("Hello world");
  const btn = createElement("button", {
    classes: "button",
    text: "Изменить цвет страницы",
  });
  document.body.append(btn);

  let interval;

  btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const changeColor = () => {
      const color = getRandomColor();
      document.body.style.backgroundColor = color;
    };

    if (interval) {
      clearInterval(interval);
      interval = null;
    } else {
      interval = setInterval(() => {
        changeColor();
      }, 1300);
      changeColor();
    }
  });
}
