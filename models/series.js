'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      series.belongsTo(models.articulos, {foreignkey: 'id'})
    
  }
  }
  Series.init({
    id_serie: { 
      type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
    nombre: DataTypes.STRING,
    genero: DataTypes.STRING,
    classificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Series',
  });
  return Series;
};