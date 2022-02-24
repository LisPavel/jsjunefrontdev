/**
 *
 * @param {string} tag
 * @returns {HTMLElement}
 */
const createElement = (tag) => document.createElement(tag);
const body = document.body;

const viaInnerHtml = () => {
  body.innerHTML = `<form class="create-user-form">
  <label>
      Имя
      <input type="text" name="userName" placeholder="Введите ваше имя">
  </label>
  <label>
      Пароль
      <input type="password" name="password" placeholder="Придумайте Пароль">
  </label>
  <button type="submit">
      Подтвердить
  </button>
</form>`;
};

const createLoginField = (type) => {
  const label = createElement("label");
  const input = createElement("input");
  switch (type.toLowerCase()) {
    case "username":
      label.textContent = "Имя ";
      input.type = "text";
      input.name = "userName";
      input.placeholder = "Введите ваше имя";
      break;
    case "password":
      label.textContent = "Пароль ";
      input.type = "password";
      input.name = "password";
      input.placeholder = "Придумайте Пароль";
      break;

    default:
      return;
  }
  label.append(input);
  label.append(" ")
  return label;
};

const viaCreate = () => {
  const form = createElement("form");
  const nameField = createLoginField("userName");
  const passField = createLoginField("password");
  const submitBtn = createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Подтвердить";

  form.className = "create-user-form";

  form.append(nameField);
  form.append(passField);
  form.append(submitBtn);

  body.append(form);
};

viaInnerHtml();
viaCreate();
