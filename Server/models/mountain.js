'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mountain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mountain.hasMany(models.Pos);
    }
  }
  Mountain.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    lat: DataTypes.STRING,
    lon: DataTypes.STRING,
    mdpl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Mountain',
  });
  return Mountain;
};