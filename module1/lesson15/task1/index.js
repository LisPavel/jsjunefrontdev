const body = document.body;

const createElement = (tag, options) => {
  const element = document.createElement(tag);

  const addClasses = (element, ...classes) =>
    classes.forEach((className) => element.classList.add(className));

  const addDataset = (element, dataset) =>
    Object.entries(dataset).forEach(
      ([key, value]) => (element.dataset[key] = value)
    );

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

  options?.href && (element.href = options.href);

  options?.src && (element.src = options.src);

  return element;
};

const api = {
  URL: "https://jsonplaceholder.typicode.com",

  getUsers() {
    return fetch(`${this.URL}/users`, { method: "GET" });
  },

  getUserById(id) {
    return fetch(`${this.URL}/users/${id}`, { method: "GET" });
  },

  getUsersByIds(ids) {
    return Promise.all(ids.map((id) => this.getUserById(id)));
  },

  getPhoto(id) {
    return fetch(`${this.URL}/photos/${id}`);
  },

  getFastestLoadedPhoto(ids) {
    return Promise.race(ids.map((id) => this.getPhoto(id)));
  },

  beforeRequest(cb) {
    cb?.();
    return this;
  },
};

class LinkListItem {
  #classNames;
  #text;
  constructor(text, classNames = []) {
    this.#text = text;
    this.#classNames = classNames;
  }

  get text() {
    return this.#text;
  }

  createContent() {
    const link = createElement("a", {
      classes: "list-item__link",
      href: "#",
      text: this.#text,
    });
    return link;
  }

  #createElement() {
    const li = createElement("li", {
      classes: ["list-item", ...this.#classNames],
    });

    return li;
  }

  render(container) {
    const element = this.#createElement();
    const content = this.createContent();
    if (Array.isArray(content)) element.append(...content);
    else element.append(content);
    container?.append(element);
  }
}

class UserListItem extends LinkListItem {
  constructor(userData) {
    const { username = "" } = userData;
    super(username, ["user-list-item"]);
  }
}

class PhotoItem extends LinkListItem {
  #className;
  #url;
  constructor(photoInfo) {
    const className = "photo-item";
    const { title, url } = photoInfo;
    super(title, [className]);
    this.#url = url;
    this.#className = className;
  }

  /**
   * @override
   */
  createContent() {
    const image = createElement("img", {
      classes: `${this.#className}__image`,
      src: this.#url,
    });
    const imageTitle = createElement("h3", {
      classes: `${this.#className}__title`,
      text: this.text,
    });
    return [image, imageTitle];
  }
}

const userList = document.getElementById("data-container");
const loader = document.getElementById("loader");

const toggleLoader = () => {
  loader.hasAttribute("hidden")
    ? loader.removeAttribute("hidden")
    : loader.setAttribute("hidden", "");
};

api
  .beforeRequest(toggleLoader)
  .getUsers()
  .then((response) => response.json())
  .then((users) => {
    users.forEach((userData) => new UserListItem(userData).render(userList));
  })
  .catch((err) => console.error(err))
  .finally(toggleLoader);

setTimeout(() => {
  const listItems = userList.querySelectorAll(".list-item");
  listItems.forEach((li) => li.remove());
  api
    .beforeRequest(toggleLoader)
    .getUsersByIds([5, 6, 2, 1])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((users) => {
      users.forEach((userData) => new UserListItem(userData).render(userList));
    })
    .catch((err) => console.error(err))
    .finally(toggleLoader);
}, 2000);

setTimeout(() => {
  const listItems = userList.querySelectorAll(".list-item");
  listItems.forEach((li) => li.remove());
  api
    .beforeRequest(toggleLoader)
    .getFastestLoadedPhoto([60, 12, 55])
    .then((response) => response.json())
    .then((photo) => new PhotoItem(photo).render(userList))
    .catch((err) => console.error(err))
    .finally(toggleLoader);
}, 4000);
