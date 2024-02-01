'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meet_greets', [
      {
        
        event_id: 1,
        band_id: 1,
        meet_start_time: '10:00:00',
        meet_end_time: '11:00:00'      
      },
      {
        
        event_id: 1,
        band_id: 2,
        meet_start_time: '11:00:00',
        meet_end_time: '12:00:00'
      },
      {
        
        event_id: 1,
        band_id: 3,
        meet_start_time: '12:00:00',
        meet_end_time: '13:00:00'
      },
      {
        
        event_id: 2,
        band_id: 2,
        meet_start_time: '13:00:00',
        meet_end_time: '14:00:00'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meet_greets', null, {})
  }
};
