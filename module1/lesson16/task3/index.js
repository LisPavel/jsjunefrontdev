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

  options?.hidden && element.setAttribute("hidden", "");

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

  getAlbums() {
    return fetch(`${this.URL}/albums`);
  },

  beforeRequest(cb) {
    cb?.();
    return this;
  },
};

class Element {
  createElement() {}
}

class Loader extends Element {
  #element;
  constructor() {
    super();
    this.createElement();
  }

  createElement() {
    this.#element = createElement("span", {
      classes: "loader",
      hidden: true,
      text: "Loading...",
    });
    return this.#element;
  }

  getElement() {
    return this.#element;
  }

  toggle() {
    if (!this.#element) return;
    this.#element.hasAttribute("hidden")
      ? this.#element.removeAttribute("hidden")
      : this.#element.setAttribute("hidden", "");
  }
}

class Album extends Element {
  #id;
  #userId;
  #title;

  constructor(albumInfo) {
    super();
    const { id, userId, title } = albumInfo;
    this.#id = id;
    this.#userId = userId;
    this.#title = title;
  }

  get userId() {
    return this.#userId;
  }

  get title() {
    return this.#title;
  }

  createElement() {
    const element = createElement("li", {
      text: this.#title,
      classes: "list-item",
    });
    return element;
  }
}

class AlbumList extends Element {
  #albums;
  constructor(albums) {
    super();
    this.#albums = albums;
  }

  createElement() {
    const list = createElement("ul", { classes: ["data-container", "list"] });
    const items = this.#albums
      .map((item) => new Album(item))
      .map((album) => album.createElement());
    list.append(...items);
    return list;
  }
}

const loader = new Loader();
body.append(loader.getElement());

const renderAlbums = async () => {
  loader.toggle();
  try {
    const response = await api.getAlbums();
    if (!response.ok) throw new Error("Can't get albums");
    const albums = await response.json();
    const albumsList = new AlbumList(albums);
    body.append(albumsList.createElement());
  } catch (error) {
    console.error(error);
  } finally {
    loader.toggle();
  }
};
renderAlbums();
