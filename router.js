
const express = require('express')
const router = express.Router()

const peliculasRoutes = require('./views/peliculasRoutes.js')
const seriesRoutes = require('./views/seriesRoutes')
// const RolRoutes = require('./views/RolRoutes')
// const ArticulosRoutes = require('./views/ArticulosRoutes')
const pedidosRoutes = require('./views/pedidosRoutes')
const UsuariosRoutes = require('./views/usuariosRoutes')

router.use("/Series",seriesRoutes)
router.use("/Peliculas",peliculasRoutes)
// router.use('/Rol', RolRoutes)
// router.use('/Articulos', ArticulosRoutes)
router.use('/Pedidos', pedidosRoutes)
router.use('/Usuarios', UsuariosRoutes)

module.exports = router
