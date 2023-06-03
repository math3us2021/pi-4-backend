module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = [];
    for (let i = 1; i <= 150; i++) {
      const user = {
        id: i.toString(),
        name: generateRandomName(),
        cpf: generateRandomCPF(),
        phone: generateRandomPhone(),
        email: generateRandomEmail(),
        passWord: generateRandomPassword(),
        petId: generateRandomPetId(),
      };
      users.push(user);
    }
    return queryInterface.bulkInsert('User', users);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};

function generateRandomName() {
  const names = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis', 'Christopher Wilson'];
  return names[Math.floor(Math.random() * names.length)];
}

function generateRandomCPF() {
  const cpf = [];
  for (let i = 0; i < 11; i++) {
    cpf.push(Math.floor(Math.random() * 9));
  }
  return cpf.join('');

}

function generateRandomPhone() {
  const phone = [];
  for (let i = 0; i < 11; i++) {
    phone.push(Math.floor(Math.random() * 9));
  }
  return phone.join('');
}

function generateRandomEmail() {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const randomName = generateRandomString(8);
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${randomName}@${randomDomain}`;
}

function generateRandomPassword() {
  return generateRandomString(8);
}

function generateRandomPetId() {
  const petIds = [];
  for (let i = 1; i <= 150; i++) {
    petIds.push(i.toString());
  }
  return petIds[Math.floor(Math.random() * petIds.length)];
}

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
}