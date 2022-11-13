'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Peliculas', {
      id_pelicula: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      classificacion: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        default:"2008-10-03 22:59:52",
        type: Sequelize.DATE
      },
      updatedAt: {
        default:"2008-10-03 22:59:52",
        type: Sequelize.DATE
      },
      idArticulo: {
        type: Sequelize.INTEGER,
        references: {
          model: "Articulos",
          key: "id_articulo"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
    } 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Peliculas');
  }
};