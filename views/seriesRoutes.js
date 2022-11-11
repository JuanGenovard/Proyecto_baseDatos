const express = require("express");
const router = express.Router();

const seriesController = require('../controllers/seriesController')

// CRUD READ todas las series
router.get('/' , seriesController.getAllSeries)

// // CRUD READ top series
router.get('/topseries' , seriesController.getTopSeries)

// // CRUD READ series por id
// router.get('/id/:id' , SerieController.getSerieById)

// // CRUD READ series por titulo
// router.get('/title/:title' , SerieController.getSerieByTitle)

// // CRUD READ series que estrenan en <7 días
// router.get('/upcoming' , SerieController.getUpcomingSeries)

// // CRUD READ series que están en el teatro
// router.get('/ontheater' , SerieController.getSeriesOnTheater)

module.exports = router