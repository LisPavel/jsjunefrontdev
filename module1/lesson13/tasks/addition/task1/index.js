class Dictionary {
  #name;
  #words;

  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get mainName() {
    return this.#name;
  }

  set setMainName(name) {
    this.#name = name;
  }

  get allWords() {
    return this.#words;
  }

  addNewWord(word, wordObj) {
    this.#words[word] = wordObj;
  }

  add(word, description) {
    if (word in this.#words) {
      console.warn(`${word} already contains in dictionary`);
      return;
    }
    this.addNewWord(word, { word, description });
  }

  remove(word) {
    delete this.#words[word];
  }

  get(word) {
    return this.#words[word];
  }

  showAllWords() {
    return Object.entries(this.#words).map(
      ([word, { description }]) => `${word} - ${description}`
    );
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  /**@override */
  add(word, description) {
    super.add(word, description);
    this.allWords[word].isDifficult = true;
  }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки," +
    " обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

console.log(hardWordsDictionary.showAllWords());

hardWordsDictionary.remove("неологизм");
console.log(hardWordsDictionary.showAllWords());

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант
