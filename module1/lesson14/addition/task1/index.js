const body = document.body;

const addClasses = (element, ...classes) =>
  classes.forEach((className) => element.classList.add(className));

const addDataset = (element, dataset) =>
  Object.entries(dataset).forEach(
    ([key, value]) => (element.dataset[key] = value)
  );

const createElement = (tag, options) => {
  const element = document.createElement(tag);

  if (options?.classes) {
    if (typeof options.classes === "string")
      addClasses(element, options?.classes);
    else if (Array.isArray(options.classes))
      addClasses(element, ...options.classes);
  }

  options?.inputType && (element.type = options.inputType);

  options?.dataset && addDataset(element, options.dataset);

  options?.value && (element.value = options.value);

  options?.text && (element.textContent = options.text);

  options?.id && (element.id = options.id);

  options?.for && (element.htmlFor = options.for);

  options?.checked != null && (element.checked = options.checked);

  return element;
};

class CustomSelect {
  #id;
  #options;
  #currentSelectedOption;

  constructor(id, options) {
    this.#id = id;
    this.#options = options;
  }

  get selectedValue() {
    return this.#currentSelectedOption;
  }

  #createListItem(option) {
    const { value, text } = option;
    const li = createElement("li", {
      classes: "select-dropdown__list-item",
      dataset: { value },
      text,
    });
    return li;
  }

  #createList() {
    const items = this.#options.map((option) => this.#createListItem(option));
    const list = createElement("ul", {
      classes: ["select-dropdown__list", `select-dropdown__list--${this.#id}`],
    });

    list.append(...items);
    return list;
  }

  #createButton() {
    const span = createElement("span", {
      classes: ["select-dropdown", `select-dropdown--${this.#id}`],
      text: "Выберите элемент",
    });
    const button = createElement("button", {
      classes: [
        "select-dropdown__button",
        `select-dropdown__button--${this.#id}`,
      ],
    });

    button.append(span);

    return button;
  }

  #createSelect() {
    const select = createElement("div", {
      classes: ["select-dropdown", `select-dropdown--${this.#id}`],
    });
    const button = this.#createButton();
    const list = this.#createList();

    select.append(button, list);

    return select;
  }

  #selectItem(listItem) {
    if (!listItem) return;
    this.#currentSelectedOption = this.#options.find(({ value }) => {
      return Number(listItem.dataset.value) === value;
    });

    /**@type {HTMLUListElement} */
    const list = listItem.closest(".select-dropdown__list");
    const select = list.closest(".select-dropdown");
    const span = select.querySelector(".select-dropdown");

    list
      .querySelectorAll(".select-dropdown__list-item.selected")
      .forEach((li) => li.classList.remove("selected"));
    listItem.classList.add("selected");

    span.textContent = this.#currentSelectedOption.text;
  }

  #toggleList(list) {
    list?.classList.toggle("active");
  }

  render(container) {
    const select = this.#createSelect();
    container.append(select);

    select.addEventListener("click", (ev) => {
      const { target } = ev;
      const element =
        target.closest(".select-dropdown__button") ??
        target.closest(".select-dropdown__list-item");
      if (element) {
        const list = select.querySelector(".select-dropdown__list");
        this.#toggleList(list);
      }
      if (element.classList.contains("select-dropdown__list-item")) {
        this.#selectItem(element);
      }
    });
  }
}

const options = [
  { value: 1, text: "JavaScript" },
  { value: 2, text: "NodeJS" },
  { value: 3, text: "ReactJS" },
  { value: 4, text: "HTML" },
  { value: 5, text: "CSS" },
];

const customSelect = new CustomSelect("123", options);
const mainContainer = document.querySelector("#container");
customSelect.render(mainContainer);
