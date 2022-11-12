'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require ("../db/db.js")
// module.exports = (sequelize, DataTypes) => {
  class Peliculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate(models) {
       Peliculas.belongsTo(models.articulos, {foreignkey: 'id'})
    }
  }
  Peliculas.init({
    id_pelicula: { 
      type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    classificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Peliculas',
  });

// };

module.exports = Peliculas