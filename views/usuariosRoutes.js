const express = require("express");
const router = express.Router();

// const { isValidRoleAdmin, authBearerMiddleware, isValidusuarios } = require("../middlewares/authMiddleware")

const usuariosController = require('../controllers/usuariosController')

// CRUD READ all usuarioss
router.get('/', usuariosController.getAllusuarios)

// // CRUD READ usuarios
// router.get('/id/:mail', authBearerMiddleware, isValidusuarios, usuariosController.getusuariosById)

// // CRUD Update usuarios
// router.put('/update/:mail', authBearerMiddleware, isValidusuarios, usuariosController.updateusuariosById)

// // CRUD delete usuarios - solo el admin
// router.delete('/delete/:mail' , authBearerMiddleware, isValidRoleAdmin, usuariosController.deleteusuariosById)

module.exports = router

// // CRUD CREATE usuarios
// router.post('/register' , usuariosController.postNewusuarios)