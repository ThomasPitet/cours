import { recipes } from "./recipes.js";
import { items } from "./items.js";

const inventory = [];

function findInventoryItemById(itemId) {
  return inventory.find((item) => itemId === item.id);
}

async function delay(timeToWait) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeToWait);
  });
}

function checkRequiredItems(recipe) {
  for (const requiredItem of recipe.requiredItems) {
    const inventoryItem = inventory.find((item) => item.id === requiredItem.id);

    if (!inventoryItem || inventoryItem.quantity < requiredItem.quantity) {
      throw new Error("Objets nécessaires au craft insuffisants.");
    }
  }

  return true;
}

function findRecipeByTargetItemId(itemId) {
  const recipe = recipes.find((recipe) => recipe.targetItemId === itemId);

  if (!recipe) {
    throw new Error("Craft introuvable");
  }

  return recipe;
}

async function handleCraftItem(itemId) {
  try {
    const recipe = findRecipeByTargetItemId(itemId);
    checkRequiredItems(recipe);

    let inventoryItem = findInventoryItemById(itemId);
    if (!inventoryItem) {
      inventoryItem = { id: itemId, quantity: 0 };
      inventory.push(inventoryItem);
    }

    await delay(recipe.craftDuration);

    inventoryItem.quantity++;

    for (const requiredItem of recipe.requiredItems) {
      const inventoryItem = findInventoryItemById(requiredItem.id);
      inventoryItem.quantity -= requiredItem.quantity;
    }

    buildDOM();
  } catch (error) {
    console.error("Craft impossible :", error);
  }
}

async function handleGatherItem(itemId) {
  try {
    const itemToGather = items.find((item) => item.id === itemId);
    if (!itemToGather) {
      throw new Error("Objet à récolter introuvable.");
    }

    let inventoryItem = findInventoryItemById(itemId);
    if (!inventoryItem) {
      inventoryItem = { id: itemId, quantity: 0 };
      inventory.push(inventoryItem);
    }

    await delay(200);

    inventoryItem.quantity++;

    buildDOM();
  } catch (error) {
    console.error("Récolte impossible :", error);
  }
}

function createItemElement(item) {
  const inventoryItem = findInventoryItemById(item.id);

  const itemButtonElement = document.createElement("button");
  const itemImageElement = document.createElement("img");
  const itemNameWrapper = document.createElement("p");
  const itemNameElement = document.createElement("strong");
  const itemQuantityElement = document.createElement("span");

  itemImageElement.setAttribute("src", item.image);
  itemImageElement.setAttribute("width", 64);

  itemNameWrapper.append(itemNameElement, itemQuantityElement);
  itemNameElement.textContent = item.name;
  itemQuantityElement.textContent = `(${inventoryItem?.quantity || 0})`;

  itemButtonElement.append(itemImageElement, itemNameWrapper);

  return itemButtonElement;
}

function buildDOM() {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";

  console.log(inventory);

  const gatherableItemsWrapper = document.createElement("section");
  const gatherableItemsTitle = document.createElement("h2");

  const craftableItemsWrapper = document.createElement("section");
  const craftableItemsTitle = document.createElement("h2");

  gatherableItemsWrapper.appendChild(gatherableItemsTitle);
  craftableItemsWrapper.appendChild(craftableItemsTitle);

  for (const item of items) {
    const itemElement = createItemElement(item);

    if (item.gatherable) {
      gatherableItemsWrapper.appendChild(itemElement);
      itemElement.addEventListener("click", () => handleGatherItem(item.id));
    } else {
      craftableItemsWrapper.appendChild(itemElement);
      itemElement.addEventListener("click", () => handleCraftItem(item.id));
    }
  }

  rootElement.append(gatherableItemsWrapper, craftableItemsWrapper);
}

buildDOM();
