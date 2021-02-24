"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, { truncate: true });
    const users = [];
    for (let i = 1; i < 50; i++) {
      const user = {
        name: `user${i}`,
        email: `user${i}@sample.test`,
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date()
      };
      users.push(user);
    }
    await queryInterface.bulkInsert("Users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
