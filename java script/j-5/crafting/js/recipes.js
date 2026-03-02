export const recipes = [
  {
    targetItemId: 3,
    givenQuantity: 4,
    requiredItems: [{ id: 1, quantity: 1 }],
    craftDuration: 200,
  },
  {
    targetItemId: 4,
    givenQuantity: 4,
    requiredItems: [{ id: 3, quantity: 2 }],
    craftDuration: 200,
  },
  {
    targetItemId: 5,
    givenQuantity: 1,
    requiredItems: [{ id: 2, quantity: 1 }],
    craftDuration: 2000,
  },
  {
    targetItemId: 6,
    givenQuantity: 1,
    requiredItems: [
      { id: 4, quantity: 1 },
      { id: 5, quantity: 2 },
    ],
    craftDuration: 5000,
  },
  {
    targetItemId: 7,
    givenQuantity: 1,
    requiredItems: [
      { id: 4, quantity: 2 },
      { id: 5, quantity: 3 },
    ],
    craftDuration: 5000,
  },
];
