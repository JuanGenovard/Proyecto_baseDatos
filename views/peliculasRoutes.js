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

// // CRUD READ Peliculas que estrenan en <7 días
// router.get('/upcoming' , peliculasController.getUpcomingPeliculas)

// // CRUD READ Peliculas que están en el teatro
// router.get('/ontheater' , peliculasController.getPeliculasOnTheater)

module.exports = router