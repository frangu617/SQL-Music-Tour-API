'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('stage', {
      stage_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      stage_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
      // No need to add timestamps as your model specifies timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('stage');

  }
};
