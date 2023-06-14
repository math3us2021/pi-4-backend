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
        quantityMonth: generateRandomQuantityMonth(),
        petId: generateRandomPetId(),
        petFeederId: generateRandomPetFeederId(),
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
  //gerar aleatoriamente datas com o formato yyyy-mm-dd
  const start = new Date(2022, 0, 1);
  const end = new Date(2023, 0, 6);
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  const date =
    randomDate.getFullYear() +
    "-" +
    (randomDate.getMonth() + 1) +
    "-" +
    randomDate.getDate();
  return date;

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

function generateRandomPetFeederId() {
  const petFeederIds = [];
  for (let i = 1; i <= 150; i++) {
    petFeederIds.push(i.toString());
  }
  return petFeederIds[Math.floor(Math.random() * petFeederIds.length)];
}

function generateRandomQuantityMonth() {
  return (Math.random() * (10 - 0) + 0).toFixed(2);
}
