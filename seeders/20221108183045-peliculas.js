'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Peliculas',[
      {
      id_pelicula: 1,
      titulo:'Jesu Castaña',
      genero:'western',
      classificacion: 10,
      idArticulo: 11
      },
      {
      id_pelicula: 2,
      titulo: 'El ataque de los tomates asesinos',
      genero: 'terror',
      classificacion: 9,
      idArticulo: 12
      },
      {
      id_pelicula: 3,
      titulo: 'Showgirls',
      genero: 'Comedia',
      classificacion: 5,
      idArticulo: 13
      },
      {
      id_pelicula: 4,
      titulo: 'Dos tontos muy tontos',
      genero: 'Comedia',
      classificacion: 4,
      idArticulo: 14
      },
      {
      id_pelicula: 5,
      titulo: 'Crueles intenciones',
      genero: 'Misterio',
      classificacion: 6,
      idArticulo: 15
      },
      {
      id_pelicula: 6,
      titulo: 'Yo el halcón',
      genero: 'Acción',
      classificacion: 5,
      idArticulo: 16
      },
      {
      id_pelicula: 7,
      titulo: 'Sharknado',
      genero: 'Ciencia ficción',
      classificacion: 8,
      idArticulo: 17
      },
      {
      id_pelicula: 8,
      titulo: 'Colega, ¿Donde está mi coche?',
      genero: 'Comedia',
      classificacion: 6,
      idArticulo: 18
      },
      {
      id_pelicula: 9,
      titulo: 'Serpiente en el avión',
      genero: 'Terror',
      classificacion: 7,
      idArticulo: 19
      },
      {
      id_pelicula: 10,
      titulo: 'Monstruño',
      genero: 'Terror',
      classificacion: 10,
      idArticulo: 20
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
