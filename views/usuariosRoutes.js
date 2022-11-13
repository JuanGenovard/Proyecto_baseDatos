const express = require("express");
const router = express.Router();


const usuariosController = require('../controllers/usuariosController')

// CRUD READ all usuarioss
router.get('/', usuariosController.getAllUsuarios)

// // CRUD READ usuarios
router.get('/id/:id', usuariosController.getUsuariosById)

router.post('/nuevousuario', usuariosController.postNuevoUsuario)

// // CRUD Update usuarios
router.put('/update/:mail', usuariosController.updateUsuarioById)

// // CRUD delete usuarios - solo el admin
router.delete('/delete/:mail', usuariosController.deleteUsuarioById)

module.exports = router
