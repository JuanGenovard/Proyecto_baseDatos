
const Series = require('../models/series')

const seriesController = {}


seriesController.getAllSeries = async (req, res) => {
    try {
        let resp = await Series.findAll({ attributes: {exclude: ['createdAt', 'updatedAt']}
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
        let resp = await Series.findAll({ attributes: {exclude:['createdAt', 'updatedAt']},
            order: [["Classificacion", "DESC"]],
            limit: 1
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

seriesController.getSerieById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Series.findOne({ attributes: {exclude:['createdAt', 'updatedAt']},
            where: {id_serie: id}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

seriesController.getSerieByTitle = async (req, res) => {
    try {
        let titulo = req.params.titulo
        let resp = await Series.findOne({ attributes: {exclude:['createdAt', 'updatedAt']},
            where: {titulo: titulo}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

seriesController.getUpComingSeries = async (req, res) => {
    try {
        Series.findAll({ attributes: {exclude:['createdAt', 'updatedAt']},
            where: {capitulo: true}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

seriesController.getSeriesEnCines = async (req, res) => {
    try {
        Series.findAll({
            where: {Cines: true}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

module.exports = seriesController