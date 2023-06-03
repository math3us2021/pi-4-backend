module.exports = {
  up: (queryInterface, Sequelize) => {
    const pet_feeder = [];
    for (let i = 1; i <= 150; i++) {
      const petFeeder = {
        id: i.toString(),
        hourStart: generateRandomHourStart(),
        quantityGrams: generateRandomQuantityGrams(),
        petId: generateRandomPetId(),

      };
      pet_feeder.push(petFeeder);
    }
    return queryInterface.bulkInsert('pet_feeder', pet_feeder);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pet_feeder', null, {});
  }
};

function generateRandomHourStart() {
  const start = new Date(2010, 0, 1);
  const end = new Date(2022, 11, 31);
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toLocaleDateString();

}

function generateRandomQuantityGrams() {
  //gerar gramas 0 a 1000
  return (Math.random() * (1000 - 0) + 0).toFixed(2);
  
}

function generateRandomPetId() {
  const petIds = [];
  for (let i = 1; i <= 150; i++) {
    petIds.push(i.toString());
  }
  return petIds[Math.floor(Math.random() * petIds.length)];
}
