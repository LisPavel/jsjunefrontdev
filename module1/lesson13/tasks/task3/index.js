class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    if (word in this.words) {
      console.warn(`${word} already contains in dictionary`);
      return;
    }
    this.words[word] = { word, description };
  }

  remove(word) {
    delete this.words[word];
  }

  get(word) {
    return this.words[word];
  }

  showAllWords() {
    return Object.entries(this.words).map(
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
    this.words[word].isDifficult = true;
  }
}

function task3() {
  //* Tests
  console.group(task3.name);

  const dictionary = new Dictionary("Толковый словарь");
  dictionary.add("JavaScript", "популярный язык программирования");
  console.log(dictionary.showAllWords());
  dictionary.add(
    "Веб-разработчик",
    "Человек, который создает новые сервисы и сайты или поддерживает" +
      " и дополняет существующие"
  );
  console.log(dictionary.showAllWords());

  dictionary.remove("JavaScript");
  console.log(dictionary.showAllWords());
  console.groupEnd();
}

const task4 = () => {
  console.group(task4.name);
  const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

  hardWordsDictionary.add(
    "дилетант",
    "Тот, кто занимается наукой или искусством без специальной подготовки, " +
      "обладая только поверхностными знаниями."
  );
  console.log(hardWordsDictionary.showAllWords());

  hardWordsDictionary.add(
    "неологизм",
    "Новое слово или выражение, а также новое значение старого слова."
  );
  console.log(hardWordsDictionary.showAllWords());

  hardWordsDictionary.add(
    "квант",
    "Неделимая часть какой-либо величины в физике."
  );
  console.log(hardWordsDictionary.showAllWords());

  hardWordsDictionary.remove("неологизм");
  console.log(hardWordsDictionary.showAllWords());
  console.groupEnd();
};

task3();
task4();
