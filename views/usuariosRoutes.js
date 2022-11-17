const express = require("express");
const router = express.Router();

const { isValidRolAdmin, authBearerMiddleware } = require("../middlewares/authMiddleware")


const usuariosController = require('../controllers/usuariosController')

// CRUD READ all usuarioss
router.get('/',authBearerMiddleware, isValidRolAdmin, usuariosController.getAllUsuarios)

// // CRUD READ usuarios
router.get('/id/:id', usuariosController.getUsuariosById)


// // CRUD Update usuarios
router.put('/update/:email', usuariosController.updateUsuarioById)

// // CRUD delete usuarios - solo el admin
router.delete('/delete/:email',authBearerMiddleware, isValidRolAdmin, usuariosController.deleteUsuarioById)

module.exports = router

// router.post('/nuevousuario', usuariosController.postNuevoUsuario)