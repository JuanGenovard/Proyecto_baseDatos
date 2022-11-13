
const express = require('express')
const router = express.Router()

const peliculasRoutes = require('./views/peliculasRoutes.js')
const seriesRoutes = require('./views/seriesRoutes')
const pedidosRoutes = require('./views/pedidosRoutes')
const UsuariosRoutes = require('./views/usuariosRoutes')

router.use("/Series",seriesRoutes)
router.use("/Peliculas",peliculasRoutes)
router.use('/Pedidos', pedidosRoutes)
router.use('/Usuarios', UsuariosRoutes)

module.exports = router
