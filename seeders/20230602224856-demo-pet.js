module.exports = {
  up: (queryInterface, Sequelize) => {
    const pets = [];
    for (let i = 1; i <= 150; i++) {
      const pet = {
        id: i.toString(),
        name: generateRandomName(),
        type: generateRandomType(),
        breed: generateRandomBreed(),
        gender: generateRandomGender(),
        birthDate: generateRandomDate(),
        weigth: generateRandomWeight(),
      };
      pets.push(pet);
    }
    return queryInterface.bulkInsert('Pet', pets);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pet', null, {});
  }
};

function generateRandomName() {
  const names = ['Maggie', 'Buddy', 'Max', 'Lucy', 'Charlie', 'Daisy', 'Rocky', 'Lola', 'Bailey', 'Sadie'];
  return names[Math.floor(Math.random() * names.length)];
}

function generateRandomType() {
  const types = ['cachorro', 'gato'];
  return types[Math.floor(Math.random() * types.length)];
}

function generateRandomBreed() {
  const breeds = ['Labrador Retriever', 'Bulldog Francês', 'Persa', 'Golden Retriever', 'SRD'];
  return breeds[Math.floor(Math.random() * breeds.length)];
}

function generateRandomGender() {
  const genders = ['macho', 'fêmea'];
  return genders[Math.floor(Math.random() * genders.length)];
}

function generateRandomDate() {
  const start = new Date(2010, 0, 1);
  const end = new Date(2022, 11, 31);
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toLocaleDateString();
}

function generateRandomWeight() {
  return (Math.random() * (15 - 1) + 1).toFixed(2);
}