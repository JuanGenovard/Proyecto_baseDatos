'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Series',[
      {
       id_serie: 1,
       titulo:'Lock and key',
       genero:'Ciencia ficción',
       classificacion: 5,
       capitulo: false,
       idArticulo: 1
      },
      {
       id_serie: 2,
       titulo:'Sagrada familia',
       genero:'Drama',
       classificacion: 3,
       capitulo: false,
       idArticulo: 2
      },
      {
       id_serie: 3,
       titulo:'Juego de tronos',
       genero:'Ciencia ficción',
       classificacion: 10,
       capitulo: true,
       idArticulo: 3
      },
      {
       id_serie: 4,
       titulo:'Chernobyl',
       genero:'Drama historico',
       classificacion: 6,
       capitulo: false,
       idArticulo: 4
      },
      {
       id_serie: 5,
       titulo:'Rick and Morty',
       genero:'Ciencia ficción',
       classificacion: 8,
       capitulo: true,
       idArticulo: 5
      },
      {
       id_serie: 6,
       titulo:'The walking dead',
       genero:'Terror',
       classificacion: 6,
       capitulo: false,
       idArticulo: 6
      },
      {
       id_serie: 7,
       titulo:'Aquí no hay quien viva',
       genero:'Comedia',
       classificacion: 5,
       capitulo: false,
       idArticulo: 7
      },
      {
       id_serie: 8,
       titulo:'El internado',
       genero:'Drama',
       classificacion: 5,
       capitulo: false,
       idArticulo: 8
      },
      {
       id_serie: 9,
       titulo:'La valla',
       genero:'Ciencia ficción',
       classificacion: 3,
       capitulo: false,
       idArticulo: 9
      },
      {
       id_serie: 10,
       titulo:'Hora de Aventuras',
       genero:'Animación',
       classificacion: 9,
       capitulo: true,
       idArticulo: 10
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
