'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedidos', [
      {
      id_pedido: 1,
      fecha_pedido: "2022-01-01",
      fecha_devolucion: "2022-01-03",
      // EmailUsuario: "salva@gmail.com",
      // id_articulo: 1
    },
    {
      id_pedido: 2,
      fecha_pedido: "2022-02-02",
      fecha_devolucion: "2022-02-04",
      // EmailUsuario: "jesus@gmail.com",
      // id_articulo: 2
    },
    {
      id_pedido: 3,
      fecha_pedido: "2022-03-03",
      fecha_devolucion: "2022-03-05",
      // EmailUsuario: "hector@gmail.com",
      // id_articulo: 6
    },
    {
      id_pedido: 4,
      fecha_pedido: "2022-04-04",
      fecha_devolucion: "2022-04-06",
      // EmailUsuario: "alex@gmail.com",
      // id_articulo: 7
    },
    {
      id_pedido: 5,
      fecha_pedido: "2022-05-05",
      fecha_devolucion: "2022-05-07",
      // EmailUsuario: "bea@gmail.com",
      // id_articulo: 5
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
