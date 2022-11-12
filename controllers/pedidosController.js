// const pedidos = require('../models/pedidos')
// const usuarios = require('../models/usuarios')

// const pedidosController = {};

// PedidosController.getPedidosFromUsuario = async (req, res) => {
//     try{
//         let email = req.params.email
//         console.log(email)
//         let resp = await usuarios.findAll({
//             where: { email: email},
//             include: {
//                 model: pedidos,
//                 attributes: ['id_pedido', 'fecha_pedido', "fecha_devolucion"]
//             },
//             attributes: ['email', 'nombre']
//         })
//         res.send(resp)
//     } catch (error) {
//         res.send(error)
//         console.log(error)
//     }
// }

// module.exports = pedidosController