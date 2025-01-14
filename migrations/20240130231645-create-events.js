'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATEONLY, // Use DATEONLY for date without time
        allowNull: false
      },
      start_time: {
        type: Sequelize.TIME, // Use TIME for time without date
        allowNull: false
      },
      end_time: {
        type: Sequelize.TIME, // Use TIME for time without date
        allowNull: false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events')
  }
}