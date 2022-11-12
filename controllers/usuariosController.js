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

module.exports = usuariosController