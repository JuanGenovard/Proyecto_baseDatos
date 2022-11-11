'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      order.hasOne(models.article, {foreignKey: 'id'});
      order.hasOne(models.user, {foreignKey: 'id'});
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
    fecha_devolucion: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};