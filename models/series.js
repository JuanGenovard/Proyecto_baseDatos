'use strict';
const {DataTypes, Model } = require('sequelize');
const sequelize = require ("../db/db.js")
// module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      Series.belongsTo(models.articulos, {foreignkey: 'id'})
    }
  }
  Series.init({
    id_serie: { 
      type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    classificacion: DataTypes.INTEGER,
    capitulo: DataTypes.BOOLEAN,
    cines: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Series',
  });

module.exports = Series

