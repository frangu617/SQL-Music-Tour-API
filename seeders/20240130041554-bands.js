'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [
      { name: 'The Rolling Stones', genre: 'Rock', available_start_time: "2024-01-30T04:19:42.147Z", end_time: "2024-01-30T04:49:42.147Z" },
      { name: 'The Beatles', genre: 'Rock', available_start_time: "2024-01-30T04:59:42.147Z", end_time: "2024-01-30T05:19:42.147Z" },
      { name: 'Led Zeppelin', genre: 'Rock', available_start_time: "2024-01-30T05:49:42.147Z", end_time: "2024-01-30T06:09:42.147Z"},
      { name: 'Pink Floyd', genre: 'Psychedelic Rock', available_start_time: "2024-01-30T06:39:42.147Z", end_time: "2024-01-30T07:19:42.147Z" },
      { name: 'Queen', genre: 'Rock', available_start_time: "2024-01-31T05:19:42.147Z", end_time: "2024-01-31T04:49:42.147Z"},
      { name: 'Nirvana', genre: 'Grunge', available_start_time: "2024-01-31T04:59:42.147Z", end_time: "2024-01-31T05:19:42.147Z" },
      { name: 'AC/DC', genre: 'Hard Rock', available_start_time: "2024-01-31T05:49:42.147Z", end_time: "2024-01-31T06:09:42.147Z" },
      { name: 'Metallica', genre: 'Heavy Metal', available_start_time: "2024-01-31T06:39:42.147Z", end_time: "2024-01-31T07:19:42.147Z" },
      { name: "Guns N' Roses", genre: 'Hard Rock', available_start_time: "2024-01-30T06:39:42.147Z", end_time: "2024-01-30T07:19:42.147Z" },
      { name: 'U2', genre: 'Rock', available_start_time: "2024-01-30T06:39:42.147Z", end_time: "2024-01-30T07:19:42.147Z" }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, {});
  }
};
