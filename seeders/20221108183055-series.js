'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Series',[
      {
       id_serie: 1,
       titulo:'Jesu Castaña',
       genero:'western',
       classificacion: 5
      },
      {
       id_serie: 2,
       titulo:'Joan Macarra',
       genero:'x',
       classificacion: 5
      },
    ],{})
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
