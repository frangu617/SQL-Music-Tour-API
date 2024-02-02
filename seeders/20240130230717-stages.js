'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [
      {
        stage_name: 'MainStage'
      },
      {
        stage_name: 'AcousticStage'
      },
      {
        stage_name: 'VIPStage'
      },
      {
        stage_name: 'OutdoorStage'
      },
      {
        stage_name: 'IndoorStage'
      },
      {
        stage_name: 'SecondaryStage'
      },
      {
        stage_name: 'ExperimentalStage'
      },
      {
        stage_name: 'ElectronicStage'
      },
      {
        stage_name: 'LocalTalentStage'
      },
      {
        stage_name: 'KidsStage'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('stages', null, {});
}
};
