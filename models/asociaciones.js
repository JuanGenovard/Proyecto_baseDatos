
const Usuario = require('./Usuarios')
const Pelicula = require('./Peliculas')
const Articulos = require("./Articulos");
const Rol = require("./roles");
const Serie = require("./Series");
const Pedidos = require("./Pedidos");

// 
Rol.hasMany(Usuario);
Usuario.belongsTo(Rol);

Usuario.hasMany(Pedidos);
Pedidos.belongsTo(Usuario);

Articulos.hasMany(Pedidos);
Pedidos.belongsTo(Articulos);

Serie.hasOne(Articulos);
Articulos.belongsTo(Serie);

Pelicula.hasOne(Articulos);
Articulos.belongsTo(Pelicula);

console.log('associated');