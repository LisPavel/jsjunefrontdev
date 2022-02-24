const handleObject = (object, key, action) => {
  switch (action) {
    case "get":
      return object[kye];
    case "add":
      object[key] = "";
      return object;
    case "delete":
      delete object[key];
      return object;
    default:
      return object;
  }
};

const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript",
};

const result = handleObject(student, "programmingLanguage", "delete");
console.log("result", result);
