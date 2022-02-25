export const createElement = (tag, options) => {
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
