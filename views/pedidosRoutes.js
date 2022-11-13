const express = require("express");
const router = express.Router();

const pedidosController = require('../controllers/pedidosController')

// // // CRUD READ Orders de un user
router.get('/id/:id', pedidosController.getPedidosById)

// // // CRUD READ all Order - solo el admin
router.get('/', pedidosController.getAllPedidos)

// // // CRUD CREATE Order
router.post('/nuevopedido', pedidosController.postNuevoPedido)

// // // CRUD Update Order
router.put('/update/:id_pedido', pedidosController.updatePedidosById)

module.exports = router