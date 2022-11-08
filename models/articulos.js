'use strict';
const {
  Model
} = require('sequelize');
const sequelize = require('../db/db')
module.exports = (sequelize, DataTypes) => {
  class Articulos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Articulos.init({
    id_articulo: { 
      type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
  }, {
    sequelize,
    modelName: 'Articulos',
  });
  return Articulos;
};