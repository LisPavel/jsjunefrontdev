const showSuccessMessage = (message) => console.log(message);
const showErrorMessage = (message) => console.error(message);

const checkTextOnErrorSymbol = (
  text = "",
  errorSymbol,
  successCallback,
  errorCallback
) => {
  let errorSymbolIndex = text.indexOf(errorSymbol);

  if (errorSymbolIndex === -1)
    return successCallback("В данном тексте нет запрещенных символов");

  do {
    errorCallback(
      `Найден запрещенный символ "${errorSymbol}" под индексом ` +
        `${errorSymbolIndex}.`
    );
    errorSymbolIndex = text.indexOf(errorSymbol, errorSymbolIndex + 1);
  } while (errorSymbolIndex !== -1);
};

const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
