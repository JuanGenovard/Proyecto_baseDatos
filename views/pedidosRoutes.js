const express = require("express");
const router = express.Router();

const pedidosController = require('../controllers/pedidosController');

const { isValidRolAdmin, authBearerMiddleware, isValidUsuario } = require("../middlewares/authMiddleware")

// // // CRUD READ Orders de un user
router.get('/id/:email',authBearerMiddleware, isValidUsuario, pedidosController.getPedidosByEmail)

// // // CRUD READ all Order - solo el admin
router.get('/',authBearerMiddleware, isValidRolAdmin, pedidosController.getAllPedidos)


// // // CRUD CREATE Order
router.post('/nuevopedido',authBearerMiddleware, pedidosController.postNuevoPedido)

// // // CRUD Update Order
router.put('/update/:id_pedido',authBearerMiddleware, isValidRolAdmin, pedidosController.updatePedidosById)

module.exports = router