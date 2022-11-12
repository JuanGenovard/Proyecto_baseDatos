
const express = require('express')
const router = express.Router()

const peliculasRoutes = require('./views/peliculasRoutes.js')
const seriesRoutes = require('./views/seriesRoutes')
// const RolRoutes = require('./views/RolRoutes')
// const ArticulosRoutes = require('./views/ArticulosRoutes')
// const PedidosRoutes = require('./views/PedidosRoutes')
// const UsuariosRoutes = require('./views/UsuariosRoutes')

router.use("/series",seriesRoutes)
router.use("/Peliculas",peliculasRoutes)
// router.use('/Rol', RolRoutes)
// router.use('/Articulos', ArticulosRoutes)
// router.use('/Pedidos', PedidosRoutes)
// router.use('/Usuarios', UsuariosRoutes)

module.exports = router
