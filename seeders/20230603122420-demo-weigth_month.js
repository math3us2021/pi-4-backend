module.exports = {
  up: (queryInterface, Sequelize) => {
    const weight_Month = [];
    for (let i = 1; i <= 150; i++) {
      const weightMonth = {
        id: i.toString(),
        weight: generateRandomWeight(),
        width: generateRandomWidth(),
        height: generateRandomHeight(),
        date: generateRandomDate(),
        age_per_month: generateRandomAgePerMonth(),
        petId: generateRandomPetId(),
      };
      weight_Month.push(weightMonth);
    }
    return queryInterface.bulkInsert("Weight_month", weight_Month);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Weight_month", null, {});
  },
};

function generateRandomWeight() {
  return (Math.random() * (20 - 0) + 0).toFixed(2);
}

function generateRandomWidth() {
  return (Math.random() * (80 - 0) + 0).toFixed(2);
}

function generateRandomHeight() {
  return (Math.random() * (60 - 0) + 0).toFixed(2);
}

function generateRandomDate() {
  const start = new Date(2021, 0, 1);
  const end = new Date(2023, 6, 31);
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toLocaleDateString();
}

function generateRandomAgePerMonth() {
  return (Math.random() * (10 - 0) + 0).toFixed(2);
}

function generateRandomPetId() {
  const petIds = [];
  for (let i = 1; i <= 150; i++) {
    petIds.push(i.toString());
  }
  return petIds[Math.floor(Math.random() * petIds.length)];
}
