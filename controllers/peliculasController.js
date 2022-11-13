
const Peliculas = require('../models/peliculas')

const peliculasController = {}


peliculasController.getAllPeliculas = async (req, res) => {
    try {
        let resp = await Peliculas.findAll({ attributes: {exclude: ['createdAt', 'updatedAt']}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

peliculasController.getTopPeliculas = async (req, res) => {
    try {
        let resp = await Peliculas.findAll({ attributes: {exclude:['createdAt', 'updatedAt']},
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

peliculasController.getPeliculasById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Peliculas.findOne({
            where: {id_serie: id}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

peliculasController.getPeliculasByTitle = async (req, res) => {
    try {
        let titulo = req.params.titulo
        let resp = await Peliculas.findOne({
            where: {titulo: titulo}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}


module.exports = peliculasController