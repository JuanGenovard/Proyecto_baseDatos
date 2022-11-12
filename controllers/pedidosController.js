// const Pedidos = require('../models/pedidos')
// const Usuarios = require('../models/usuarios')

// const pedidosController = {};

// PedidosController.getPedidosFromUsuario = async (req, res) => {
//     try{
//         let email = req.params.email
//         console.log(email)
//         let resp = await User.findAll({
//             where: { email: email},
//             include: {
//                 model: Pedidos,
//                 attributes: ['id_Pedidos', 'fecha_pedido', "fecha_devolucion"]
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