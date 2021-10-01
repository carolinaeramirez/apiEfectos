const { DataTypes } = require("sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define("efect", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    observations: { type: DataTypes.STRING, allowNull: false },
    entry: { type: DataTypes.DATEONLY },
    exit: { type: DataTypes.DATEONLY },
    
  });
};
