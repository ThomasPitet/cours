const horses = [{ name: "Petit Tonnerre" }, { name: "Petite Flamme" }];
const distance = 100;

const horsesPromises = horses.map(function (horse) {
  return new Promise(function (resolve, reject) {
    let coveredDistance = 0;

    const intervalId = setInterval(function () {
      const randomCoveredDistance = Math.floor(Math.random() * 10);
      coveredDistance += randomCoveredDistance;

      console.log(
        `[${horse.name}] +${randomCoveredDistance}m, total : ${coveredDistance}m`
      );

      if (coveredDistance >= distance) {
        clearInterval(intervalId);
        resolve({
          horseName: horse.name,
          finishMessage: `Le cheval ${horse.name} a terminé la course.`,
        });
      }
    }, 200);
  });
});

Promise.all(horsesPromises).then(function (horsesResults) {
  for (const horseResult of horsesResults) {
    console.log(horseResult.finishMessage);
  }
});

Promise.race(horsesPromises).then(function (fastestHorse) {
  console.log(`${fastestHorse.horseName} a gagné la course.`);
});