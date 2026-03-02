import { Character } from "./character.js";

async function fetchHeroes() {
  try {
    const response = await fetch("http://localhost:3000/heroes");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const heroes = await response.json();

    return heroes;
  } catch (error) {
    console.error(error);
  }
}

async function createHeroes() {
  const heroes = await fetchHeroes();
  const heroesInstances = [];

  for (const hero of heroes) {
    const heroInstance = new Character(
      hero.id,
      hero.name,
      hero.class,
      hero.level,
      hero.hp,
      hero.attack,
      hero.defense,
      hero.gold,
    );
    heroesInstances.push(heroInstance);
  }

  return heroesInstances;
}

createHeroes();