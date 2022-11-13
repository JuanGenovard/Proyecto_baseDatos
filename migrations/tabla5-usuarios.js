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
      createdAt: {
        default:"2008-10-03 22:59:52",
        type: Sequelize.DATE
      },
      updatedAt: {
        default:"2008-10-03 22:59:52",
        type: Sequelize.DATE
      },
      id_Rol: {
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