'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exchanges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
        field: 'user_id'

      },
      sourceCurrency: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'source_currency'
      },
      sourceValue: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: 'source_value'
      },
      targetCurrency: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'target_currency'
      },
      conversionRate: {
        type: Sequelize.DECIMAL(10, 6),
        allowNull: false,
        field: 'conversion_rate'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('exchanges');
  }
};