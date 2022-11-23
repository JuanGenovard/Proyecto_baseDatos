const Pedidos = require('../models/pedidos')
const usuarios = require('../models/usuarios')

const pedidosController = {};

pedidosController.getPedidosByEmail = async (req, res) => {
    try {
        let email = req.params.email
        let resp = await usuarios.findAll({ attributes: {exclude:['createdAt', 'updatedAt']},
            where: {email: email},
            include: {
                model: Pedidos,
                attributes: ['id_pedidos', 'fecha_pedido', "fecha_devolucion"]
            },
            attributes: ['email', 'nombre']
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

pedidosController.getAllPedidos = async (req, res) => {
    try {
        let resp = await Pedidos.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
        console.log(err)
    }
}

pedidosController.getPedidosFromUsuario = async (req, res) => {
    try{
        let email = req.params.email
        console.log(email)
        let resp = await usuarios.findAll({
            where: { email: email},
            include: {
                model: Pedidos,
                attributes: ['id_pedido', 'fecha_pedido', "fecha_devolucion"]
            },
            attributes: ['email', 'nombre']
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

pedidosController.postNuevoPedido = async (req, res) => {
    try {
        let data = req.body
        let resp = await Pedidos.create({
            fecha_pedido: data.fecha_pedido,
            fecha_devolucion: data.fecha_devolucion,
            EmailUsuario: data.EmailUsuario,
            id_articulo: data.id_articulo

        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

pedidosController.updatePedidosById = async (req, res) => {
    try {
        let data = req.body
        let resp = await Pedidos.update(
            {
                fecha_pedido: data.fecha_pedido,
            fecha_devolucion: data.fecha_devolucion,
            },
            {
                where: { id_pedido: data.id_pedido }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

module.exports = pedidosController