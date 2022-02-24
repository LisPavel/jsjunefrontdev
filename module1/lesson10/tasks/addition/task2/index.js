const startGame = (heroPlayer, enemyPlayer) => {
  let gameStory = [];

  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    const randNumber = getRandomNumberInRange();
    const randomHeatValue = getRandomNumberInRange(1, 10);
    makeHitTo(randNumber === 0 ? enemyPlayer : heroPlayer, randomHeatValue);

    let [
      { name: heroName, health: heroHealth },
      { name: enemyName, health: enemyHealth },
    ] = [heroPlayer, enemyPlayer];
    gameStory.push({ heroName, heroHealth, enemyName, enemyHealth });
  }

  console.table(gameStory);
  return heroPlayer.health > 0 ? heroPlayer : enemyPlayer;
};

function showWinner({ name, health }) {
  alert(`${name} победил! У него осталось ${health} здоровья`);
}

function getRandomNumberInRange(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHitTo(player, value = 10) {
  player.health -= value;
}

const hero = {
  name: "Batman",
  health: 100,
};

const enemy = {
  name: "Joker",
  health: 100,
};

const winner = startGame(hero, enemy);
showWinner(winner);
