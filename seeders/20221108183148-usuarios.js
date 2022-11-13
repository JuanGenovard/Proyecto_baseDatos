'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
      email: "diego@gemail.com",
      fecha_nacimiento: "1990-05-10",
      contraseña: "raton",
      nombre: "diego",
      id_rol: 1
    },
    {
      email: "bea@gemail.com",
      fecha_nacimiento: "1989-10-04",
      contraseña: "portatil",
      nombre: "bea",
      id_rol: 1
    },
    {
      email: "hector@gemail.com",
      fecha_nacimiento: "2000-08-05",
      contraseña: "pantalla",
      nombre: "hector",
      id_rol: 2
    },
    {
      email: "alex@gemail.com",
      fecha_nacimiento: "1994-03-11",
      contraseña: "teclado",
      nombre: "alex",
      id_rol: 2
    },
    {
      email: "jose@gemail.com",
      fecha_nacimiento: "1996-05-11",
      contraseña: "discoduro",
      nombre: "jose",
      id_rol: 2
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
