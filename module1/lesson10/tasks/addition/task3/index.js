const getKiller = (suspectInfo, deadPeople) => {
  if (deadPeople.length === 0) return "Никого не убили";

  const suspectPersons = Object.keys(suspectInfo);

  for (const suspectPerson of suspectPersons) {
    const metPersons = suspectInfo[suspectPerson];
    if (metPersons.length === 0) continue;

    const deadMetPersons = metPersons.filter((person) =>
      deadPeople.includes(person)
    );

    if (deadMetPersons.length === deadPeople.length)
      return `Убийца ${suspectPerson}`;
  }
  return "Убийца не найден";
};

const killer1 = getKiller(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
); // Убийца James

const killer2 = getKiller(
  {
    Brad: [],
    Megan: ["Ben", "Kevin"],
    Finn: [],
  },
  ["Ben"]
); // Убийца Megan

console.log(killer1, killer2);
