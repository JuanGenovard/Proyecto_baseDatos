'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      idRol: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id_rol"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
    } 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};