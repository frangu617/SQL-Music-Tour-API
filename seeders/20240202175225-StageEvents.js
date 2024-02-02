'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stage_events', [
      {
        event_id: 1, // ID of the MusicFestival event
        stage_id: 1, // ID of the MainStage
      },
      {
        event_id: 2, // ID of the Conference event
        stage_id: 2, // ID of the AcousticStage
      },
      {
        event_id: 1, // Another stage for the MusicFestival event
        stage_id: 3, // ID of the VIPStage
      },
      {
        event_id: 3, // ID of another event
        stage_id: 1, // ID of the MainStage
      },
      // Add more records for other events and stages as needed
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stage_events', null, {});
  },
};
