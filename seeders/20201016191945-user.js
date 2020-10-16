const faker = require('faker');

const users = [...Array(8)].map((user) => (
  {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password_digest: faker.internet.password(8),
    photo: faker.image.avatar(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
