'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articulos', [
      {
      id_articulo: 1
    },
    {
      id_articulo: 2
    },
    {
      id_articulo: 3
    },
    {
      id_articulo: 4
    },
    {
      id_articulo: 5
    },
    {
      id_articulo: 6
    },
    {
      id_articulo: 7
    },
    {
      id_articulo: 8
    },
    {
      id_articulo: 9
    },
    {
      id_articulo: 10
    },
    {
      id_articulo: 11
    },
    {
      id_articulo: 12
    },
    {
      id_articulo: 13
    },
    {
      id_articulo: 14
    },
    {
      id_articulo: 15
    },
    {
      id_articulo: 16
    },
    {
      id_articulo: 17
    },
    {
      id_articulo: 18
    },
    {
      id_articulo: 19
    },
    {
      id_articulo: 20
    }
  ], {});
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
