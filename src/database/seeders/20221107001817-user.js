'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Marcos',
        last_name: 'Danilo'
      },
      {
        first_name: 'Michael',
        last_name: 'Santos'
      },
  ], {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
