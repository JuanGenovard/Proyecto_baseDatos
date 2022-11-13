'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id_pedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_pedido: {
        type: Sequelize.DATEONLY
      },
      fecha_devolucion: {
        type: Sequelize.DATEONLY
      },
      EmailUsuario: {
        type: Sequelize.STRING
      },
      id_articulo: {
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
      idUsuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id_usuario"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
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
    await queryInterface.dropTable('Pedidos');
  }
};