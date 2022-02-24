const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,

  checkChancesToWin(defender) {
    const superiorForcesNumber = Object.entries(this)
      .filter(([, value]) => typeof value === "number")
      .reduce(
        (superiorForcesSum, [force, amount]) =>
          (superiorForcesSum +=
            defender[force] == null || amount > defender[force] ? 1 : 0),
        0
      );

    const forcesNumber = Object.keys(defender).length;

    return [superiorForcesNumber, forcesNumber];
  },

  improveArmy() {
    Object.keys(this)
      .filter((key) => typeof this[key] === "number")
      .forEach((key) => (this[key] += 5));
  },

  attack(defender) {
    const [ourArmyChances, maximumChances] = this.checkChancesToWin(defender);
    if ((ourArmyChances / maximumChances) * 100 < 70) {
      this.improveArmy();
      alert(
        `Наши шансы равны ${ourArmyChances}/${maximumChances}.` +
          ` Необходимо укрепление!`
      );
    } else {
      alert("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
    }
  },
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

//* TEST
// console.log(attacker.checkChancesToWin(defender));
// attacker.improveArmy();
// console.log(attacker);
// console.log(attacker.checkChancesToWin(defender));

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
