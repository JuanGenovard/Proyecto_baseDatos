'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Peliculas',[
      {
      id_pelicula: 1,
      titulo:'Jesu Castaña',
      genero:'western',
      classificacion: 5
      },
      {
      id_pelicula: 2,
      titulo: 'El ataque de los tomates asesinos',
      genero: 'terror',
      classificacion: 5
      }
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
