'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stage', [
      {
        stage_name: 'Main Stage'
      },
      {
        stage_name: 'Acoustic Stage'
      },
      {
        stage_name: 'VIP Stage'
      },
      {
        stage_name: 'Outdoor Stage'
      },
      {
        stage_name: 'Indoor Stage'
      },
      {
        stage_name: 'Secondary Stage'
      },
      {
        stage_name: 'Experimental Stage'
      },
      {
        stage_name: 'Electronic Stage'
      },
      {
        stage_name: 'Local Talent Stage'
      },
      {
        stage_name: 'Kids Stage'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
