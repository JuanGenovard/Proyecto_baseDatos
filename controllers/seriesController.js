
const Series = require('../models/series')

const seriesController = {}


seriesController.getAllSeries = async (req, res) => {
    try {
        let resp = await Series.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

seriesController.getTopSeries = async (req, res) => {
    try {
        let resp = await Series.findAll({
            order: [["Classificacion", "DESC"]],
            limit: 5
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

// SeriesController.getSerieById = async (req, res) => {
//     try {
//         let id = req.params.id
//         let resp = await Serie.findOne({
//             where: {id_serie: id}
//         })
//             .then(resp => {
//                 res.send(resp)
//             })
//     } catch (err) {
//         res.send(err)
//     }
// }

// SeriesController.getSerieByTitle = async (req, res) => {
//     try {
//         let title = req.params.title
//         let resp = await Serie.findOne({
//             where: {title: title}
//         })
//             .then(resp => {
//                 res.send(resp)
//             })
//     } catch (err) {
//         res.send(err)
//     }
// }

// SeriesController.getUpcomingSeries = async (req, res) => {
//     try {
//         Serie.findAll({
//             where: {chapter: true}
//         })
//             .then(resp => {
//                 res.send(resp)
//             })
//     } catch (err) {
//         res.send(err)
//     }
// }

// SeriesController.getSeriesOnTheater = async (req, res) => {
//     try {
//         Serie.findAll({
//             where: {theater: true}
//         })
//             .then(resp => {
//                 res.send(resp)
//             })
//     } catch (err) {
//         res.send(err)
//     }
// }

module.exports = seriesController