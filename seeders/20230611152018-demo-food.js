module.exports = {
  up: (queryInterface, Sequelize) => {
    const food = [];
    for (let i = 1; i <= 150; i++) {
      const Food = {
        id: i.toString(),
        petId: generateRandomPetId(),
        petFeederId: generateRandomPetFeederId(),
        dateAliment: generateRandomDate(),
        quantity: generateRandomQuantity(),
        success: generateRandomSuccess(),
      };
      food.push(Food);
    }
    return queryInterface.bulkInsert("Food", food);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Food", null, {});
  },
};

function generateRandomPetId() {
  const petIds = [];
  for (let i = 1; i <= 150; i++) {
    petIds.push(i.toString());
  }
  return petIds[Math.floor(Math.random() * petIds.length)];
}

function generateRandomPetFeederId() {
  const petFeederIds = [];
  for (let i = 1; i <= 150; i++) {
    petFeederIds.push(i.toString());
  }
  return petFeederIds[Math.floor(Math.random() * petFeederIds.length)];
}

function generateRandomDate() {
  const start = new Date(2021, 0, 1);
  const end = new Date(2023, 6, 31);
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toLocaleDateString();
}

function generateRandomQuantity() {
  return (Math.random() * (10 - 0) + 0).toFixed(2);
}

function generateRandomSuccess() {
  const success = [true, false];
  return success[Math.floor(Math.random() * success.length)];
}
