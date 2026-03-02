export class Character {
  #id;
  #name;
  #class;
  #level;
  #hp;
  #maxHp;
  #attack;
  #defense;
  #gold;
  #items = [];

  constructor(id, name, heroClass, level, hp, attack, defense, gold) {
    this.#id = id;
    this.#name = name;
    this.#class = heroClass;
    this.#level = level;
    this.#hp = hp;
    this.#maxHp = hp;
    this.#attack = attack;
    this.#defense = defense;
    this.#gold = gold;
  }

  get id() {
    return this.#id;
  }

  set id(newId) {
    this.#id = newId;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    // "   t t    " -> trim() -> "t t"
    if (newName.trim().length < 3) {
      throw new Error("Le nom doit faire 3 caractères ou plus");
    }
    this.#name = newName.trim();
  }

  get hp() {
    return this.#hp;
  }

  set hp(newHp) {
    newHp = Number(newHp);

    if (Number.isNaN(newHp)) {
      throw new Error("Le nombre de points de vie doit être un nombre");
    }

    if (newHp < 0) {
      throw new Error("Le nombre de points vie doit être positif");
    }

    this.#hp = newHp;
  }

  get isAlive() {
    return this.#hp > 0;
  }

  get hpPercentage() {
    const percentageNumber = (this.#hp / this.#maxHp) * 100;
    return `${percentageNumber.toFixed(2)}%`;
  }

}

  displayInventory() {
    for (const item of this.#items) {
      console.log(item);
    }
  }

  addItems(name) {
    this.#items.push(name);
  }

  get items() {
    return this.#items;
  }
}