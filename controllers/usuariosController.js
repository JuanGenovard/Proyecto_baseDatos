const usuarios = require('../models/usuarios')

const usuariosController = {};

usuariosController.getAllusuarios = async (req, res) => {
    try {
        let resp = await usuarios.findAll({attributes: {exclude:['createdAt', 'updatedAt']},
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

usuariosController.getUsuariosById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await usuarios.findOne({ attributes: {exclude:['createdAt', 'updatedAt']},
            where: {id_usuario: id}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

module.exports = usuariosController