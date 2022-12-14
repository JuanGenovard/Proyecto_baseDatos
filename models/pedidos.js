'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require ("../db/db.js")

  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      Pedidos.hasOne(models.articulos, {foreignKey: 'id'});
      Pedidos.hasOne(models.usuarios, {foreignKey: 'id'});
    }
  }
  Pedidos.init({
    id_pedido: { 
      type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
    fecha_pedido: DataTypes.DATEONLY,
    fecha_devolucion: DataTypes.DATEONLY,
    EmailUsuario: DataTypes.STRING,
    id_articulo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedidos',
  });


  module.exports = Pedidos