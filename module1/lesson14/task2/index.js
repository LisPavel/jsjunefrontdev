//* TASK 2
const body = document.body;

let theme = "light";

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

  if (tag === "button" && theme === "dark") {
    addClasses(element, "button_theme_dark");
  }

  return element;
};

const createCheckBoxForm = (taskData) => {
  const { id = "", completed: checked = false } = taskData;

  const checkboxForm = createElement("form", { classes: "checkbox-form" });

  const checkbox = createElement("input", {
    inputType: "checkbox",
    classes: "checkbox-form__checkbox",
    id,
    checked,
  });

  const label = createElement("label", { for: id });

  checkboxForm.append(checkbox, label);

  return checkboxForm;
};

const createTaskMainContent = (taskData) => {
  const { text = "" } = taskData;
  const mainContent = createElement("div", {
    classes: "task-item__main-content",
  });

  const checkboxForm = createCheckBoxForm(taskData);
  const taskText = createElement("span", { classes: "task-item__text", text });

  mainContent.append(checkboxForm, taskText);

  return mainContent;
};

const createTask = (taskData) => {
  const { id: taskId = "" } = taskData;

  const taskElement = createElement("div", {
    classes: "task-item",
    dataset: { taskId },
  });

  const taskMainContainer = createElement("div", {
    classes: "task-item__main-container",
  });

  const taskMainContent = createTaskMainContent(taskData);
  const deleteBtn = createElement("button", {
    classes: ["task-item__delete-button", "default-button", "delete-button"],
    text: "Удалить",
    dataset: { deleteTaskId: taskId },
  });

  taskMainContainer.append(taskMainContent, deleteBtn);

  taskElement.append(taskMainContainer);

  if (theme === "dark") taskElement.classList.add("task-item_theme_dark");
  return taskElement;
};

const createDeleteModalButtons = () => {
  const buttonsContainer = createElement("div", {
    classes: "delete-modal__buttons",
  });
  const cancelButton = createElement("button", {
    classes: ["delete-modal__button", "delete-modal__cancel-button"],
    text: "Отмена",
  });
  const deleteButton = createElement("button", {
    classes: ["delete-modal__button", "delete-modal__confirm-button"],
    text: "Удалить",
  });

  buttonsContainer.append(cancelButton, deleteButton);

  return buttonsContainer;
};

const createDeleteModal = () => {
  const deleteModal = createElement("div", { classes: "delete-modal" });
  const buttons = createDeleteModalButtons();
  const question = createElement("h3", {
    classes: "delete-modal__question",
    text: "Вы действительно хотите удалить эту задачу?",
  });

  deleteModal.append(question, buttons);

  return deleteModal;
};

const createModal = () => {
  const modal = createElement("div", {
    classes: ["modal-overlay", "modal-overlay_hidden"],
  });
  const deleteModal = createDeleteModal();

  modal.append(deleteModal);

  return modal;
};

const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

const taskList = body.querySelector(".tasks-list");
tasks.forEach((taskData) => taskList.append(createTask(taskData)));

// * TASK 3

const createNewTask = (newTaskText) => {
  const task = {
    id: `${Date.now()}`,
    completed: false,
    text: newTaskText,
  };
  tasks.push(task);
  taskList.append(createTask(task));
};

const createTaskForm = body.querySelector(".create-task-block");

const showError = (message) => {
  errorMessageBlock.textContent = message;
};

createTaskForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const { target: form } = ev;
  const input = form.querySelector(".create-task-block__input");
  const newTaskText = input.value.trim();

  if (!newTaskText) return showError("Название задачи не должно быть пустым");
  if (tasks.some(({ text: taskText }) => taskText === newTaskText))
    return showError("Задача с таким названием уже существует.");

  input.value = "";
  createNewTask(newTaskText);
});

// * task4

const errorMessageBlock = createElement("span", {
  classes: "error-message-block",
});

createTaskForm.append(errorMessageBlock);

// * task5

const modal = createModal();
body.append(modal);

taskList.addEventListener("click", (event) => {
  const { target } = event;
  if (target?.classList.contains("task-item__delete-button")) {
    modal.classList.remove("modal-overlay_hidden");
    modal.dataset.taskIdToRemove = target.dataset.deleteTaskId;
  }
});

modal.addEventListener("click", (event) => {
  const { target } = event;
  if (target?.classList.contains("delete-modal__button")) {
    modal.classList.add("modal-overlay_hidden");
  }
  if (target?.classList.contains("delete-modal__confirm-button")) {
    const taskId = modal.dataset.taskIdToRemove;
    if (!taskId) return;

    const index = tasks.findIndex((task) => task.id === taskId);
    if (index === -1) return;

    tasks.splice(index, 1);

    taskList.querySelector(`.task-item[data-task-id="${taskId}"]`)?.remove();
  }
});

//* TASK6

document.addEventListener("keydown", (event) => {
  const { key } = event;
  if (key?.toLocaleLowerCase() === "tab") {
    event.preventDefault();
    const tasksItems = taskList.querySelectorAll(".task-item");
    const buttons = body.querySelectorAll("button");
    (theme === "light"
      ? body.classList.add.bind(body.classList)
      : body.classList.remove.bind(body.classList))("theme_dark");

    tasksItems.forEach((taskItem) => {
      (theme === "light"
        ? taskItem.classList.add.bind(taskItem.classList)
        : taskItem.classList.remove.bind(taskItem.classList))(
        "task-item_theme_dark"
      );
    });

    buttons.forEach((button) => {
      (theme === "light"
        ? button.classList.add.bind(button.classList)
        : button.classList.remove.bind(button.classList))("button_theme_dark");
    });

    theme = theme === "light" ? "dark" : "light";
  }
});
