'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peliculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Peliculas.init({
    id_pelicula: { 
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
    modelName: 'Peliculas',
  });
  return Peliculas;
};