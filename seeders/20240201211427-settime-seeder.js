'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('set_times', [
      {  event_id: 1, band_id: 1, stage_id: 1, start_time: '14:00:00', end_time: '14:30:00' },
      {  event_id: 2, band_id: 2, stage_id: 2, start_time: '15:00:00', end_time: '15:30:00' },
      {  event_id: 3, band_id: 3, stage_id: 3, start_time: '16:00:00', end_time: '16:30:00' },
      {  event_id: 4, band_id: 4, stage_id: 4, start_time: '17:00:00', end_time: '17:30:00' },
      {  event_id: 5, band_id: 5, stage_id: 5, start_time: '18:00:00', end_time: '18:30:00' },
      {  event_id: 6, band_id: 6, stage_id: 6, start_time: '19:00:00', end_time: '19:30:00' },
      {  event_id: 7, band_id: 7, stage_id: 7, start_time: '20:00:00', end_time: '20:30:00' },
      {  event_id: 8, band_id: 8, stage_id: 8, start_time: '21:00:00', end_time: '21:30:00' },
      {  event_id: 9, band_id: 9, stage_id: 9, start_time: '22:00:00', end_time: '22:30:00' },
      {  event_id: 10, band_id: 10, stage_id: 10, start_time: '23:00:00', end_time: '23:30:00' },
      // Add more entries as needed
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('set_times', null, {});

  }
};
