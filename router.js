
const express = require('express')
const router = express.Router()

const PeliculasRoutes = require('./views/PeliculasRoutes.js')
const SeriesRoutes = require('./views/SeriesRoutes')
const RolRoutes = require('./views/RolRoutes')
const ArticulosRoutes = require('./views/ArticulosRoutes')
const PedidosRoutes = require('./views/PedidosRoutes')
const UsuariosRoutes = require('./views/UsuariosRoutes')

router.use("/Series",SeriesRoutes)
router.use("/Peliculas",PeliculasRoutes)
router.use('/Rol', RolRoutes)
router.use('/Articulos', ArticulosRoutes)
router.use('/Pedidos', PedidosRoutes)
router.use('/Usuarios', UsuariosRoutes)

module.exports = router
