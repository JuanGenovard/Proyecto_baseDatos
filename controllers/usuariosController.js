const usuarios = require('../models/usuarios')



const usuariosController = {};

usuariosController.getAllUsuarios = async (req, res) => {
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

usuariosController.postNuevoUsuario = async (req, res) => {
    try {
        let data = req.body
        let resp = await usuarios.create({
            email: data.email,
            fecha_nacimiento: data.fecha_nacimiento,
            contraseña: data.contraseña,
            nombre: data.nombre,
            id_rol: data.id_rol,
            exclude:['createdAt', 'updatedAt']
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

usuariosController.updateUsuarioById = async (req, res) => {
    try {
        let data = req.body
        let resp = await usuarios.update(
            {
                email: data.email,
                contraseña: data.contraseña,
                nombre: data.nombre
            },
            {
                where: { email: data.email }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

usuariosController.deleteUsuarioById = async (req, res) => {
    try {
        let email = req.params.email
        let resp = await usuarios.destroy({
            where: { email: email }
        })

        if (resp == 1) {
            res.send("El perfil ha sido eliminado")
        } else {
            res.send("No se ha podido eliminar el perfil")
        }

    } catch (err) {
        res.send(err)
    }
}

module.exports = usuariosController