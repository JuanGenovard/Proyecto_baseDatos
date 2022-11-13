const express = require("express");
const router = express.Router();

const peliculasController = require('../controllers/peliculasController')

// CRUD READ todas las Peliculas
router.get('/', peliculasController.getAllPeliculas)

// // CRUD READ top Peliculas
router.get('/topPeliculas', peliculasController.getTopPeliculas)

// // CRUD READ Peliculas por id
router.get('/id', peliculasController.getPeliculasById)

// // CRUD READ Peliculas por titulo
router.get('/titulo', peliculasController.getPeliculasByTitle)

router.get('/genero/:genero' , peliculasController.getPeliculasByGenero)


module.exports = router