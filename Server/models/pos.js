"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pos.belongsTo(models.Mountain);
    }
  }
  Pos.init(
    {
      posName: {
        defaultValue: '-',
        type: DataTypes.STRING,
      },
      time: {
        defaultValue: "-",
        type: DataTypes.STRING,
      },
      posMdpl: {
        defaultValue: "-",
        type: DataTypes.STRING,
      },
      posDescription: {
        defaultValue: "-",
        type: DataTypes.TEXT,
      },
      MountainId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pos",
    }
  );
  return Pos;
};
