'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
        name: 'MusicFestival',
        date: '2024-03-15',
        start_time: '14:00:00',
        end_time: '21:30:00'
      },
      {
        name: 'Conference',
        date: '2024-05-20',
        start_time: '09:30:00',
        end_time: '17:45:00'
      },
      {
        name: 'SportingEvent',
        date: '2024-07-10',
        start_time: '18:15:00',
        end_time: '22:00:00'
      },
      {
        name: 'ArtExhibition',
        date: '2024-09-05',
        start_time: '11:00:00',
        end_time: '16:30:00'
      },
      {
        name: 'CharityGala',
        date: '2024-08-28',
        start_time: '19:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'MoviePremiere',
        date: '2024-04-08',
        start_time: '20:30:00',
        end_time: '23:30:00'
      },
      {
        name: 'TechMeetup',
        date: '2024-06-25',
        start_time: '18:00:00',
        end_time: '21:00:00'
      },
      {
        name: 'FoodFestival',
        date: '2024-10-12',
        start_time: '12:00:00',
        end_time: '20:00:00'
      },
      {
        name: 'ComedyShow',
        date: '2024-02-03',
        start_time: '19:45:00',
        end_time: '21:30:00'
      },
      {
        name: 'FashionShow',
        date: '2024-11-17',
        start_time: '15:30:00',
        end_time: '18:00:00'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('events', null, {})
  }
};
