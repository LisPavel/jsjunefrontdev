const body = document.body;
const container = body.querySelector(".container");

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

  getPost(id) {
    return fetch(`${this.URL}/posts/${id}`);
  },

  getCommentsToPost(postId) {
    return fetch(`${this.URL}/comments?postId=${postId}`);
  },

  beforeRequest(cb) {
    cb?.();
    return this;
  },
};

class Element {
  createElement() {}
  createContent() {}
}

class PostComment extends Element {
  #author;
  #comment;
  #postId;
  #id;
  constructor(commentInfo) {
    super();
    const { email: author, body: comment, postId, id } = commentInfo;
    this.#author = author;
    this.#comment = comment;
    this.#postId = postId;
    this.#id = id;
  }

  createContent() {
    const author = createElement("span", {
      classes: "post-comment__author",
      text: this.#author,
    });
    const comment = createElement("span", {
      classes: "post-comment__text",
      text: this.#comment,
    });

    return [author, comment];
  }

  createElement() {
    const comment = createElement("div", { classes: "post-comment" });
    comment.append(...this.createContent());

    return comment;
  }
}

class Post extends Element {
  #id;
  #title;
  #content;
  #comments;
  constructor(postInfo) {
    super();
    const { id, title, body: postContent, comments = [] } = postInfo;
    this.#id = id;
    this.#title = title;
    this.#content = postContent;
    this.#comments = comments;
  }

  #createComments() {
    const comments = createElement("div", {
      classes: ["post__comments", "post__comments--collapsed"],
    });

    comments.append(
      ...this.#comments
        .map((commentInfo) => new PostComment(commentInfo))
        .map((postComment) => postComment.createElement())
    );
    return comments;
  }

  createContent() {
    const title = createElement("h1", {
      classes: "post__title",
      text: this.#title,
    });
    const content = createElement("p", {
      classes: ["post__text", "post__text--collapsed"],
      text: this.#content,
    });
    const commentsTitle = createElement("b", {
      classes: "post__comments-text",
      text: "Комментарии: ",
    });
    const commentsCounter = createElement("span", {
      classes: "post__comments-counter",
      text: `(${this.#comments.length})`,
    });
    const comments = this.#createComments();

    return [title, content, commentsTitle, commentsCounter, comments];
  }

  createElement() {
    const post = createElement("div", { classes: "post", id: "post" });

    post.append(...this.createContent());

    post.addEventListener("click", (ev) => {
      const { target } = ev;
      if (target.classList.contains("post__text--collapsed")) {
        target.classList.remove("post__text--collapsed");
      }
      if (target.classList.contains("post__comments-counter")) {
        const comments = post.querySelector(".post__comments");
        if (comments.classList.contains("post__comments--collapsed")) {
          comments.classList.remove("post__comments--collapsed");
          target.textContent = "(скрыть)";
        } else {
          comments.classList.add("post__comments--collapsed");
          target.textContent = `(${this.#comments.length})`;
        }
      }
    });

    return post;
  }
}

const renderPost = async (postId) => {
  try {
    const responses = await Promise.all([
      api.getPost(postId),
      api.getCommentsToPost(postId),
    ]);
    const failedRequest = responses.find((resp) => !resp.ok);
    if (failedRequest) throw new Error(`Failed to load ${failedRequest.url}`);
    const [postInfo, comments] = await Promise.all(
      responses.map((resp) => resp.json())
    );
    postInfo.comments = comments;
    const post = new Post(postInfo);
    container.append(post.createElement());
  } catch (error) {
    console.error(error);
  } finally {
  }
};

renderPost(1);
