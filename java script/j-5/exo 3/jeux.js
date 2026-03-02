const player = {
  hp: 50,
  atk: 10,
};

const monster = {
  hp: 45,
  atk: 15,
};

function getRandomNumber(max) {
  return Math.random() * max;
}

function startFight() {
  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      // ? Logique de combat
      player.hp -= getRandomNumber(monster.atk);
      monster.hp -= getRandomNumber(player.atk);

      console.log({player, monster});

      // ? Logique de fin de combat
      if (player.hp <= 0 || monster.hp <= 0) {
        clearInterval(intervalId);

        if (player.hp <= 0 && monster.hp <= 0) {
          reject("Égalité");
        } else if (player.hp <= 0) {
          reject("Le joueur a perdu");
        } else {
          resolve("Le joueur a gagné");
        }
      }
    }, 300);
  });
}

startFight().then((winMessage) => {
  console.log(winMessage);
}).catch((looseMessage) => {
  console.error(looseMessage);
});