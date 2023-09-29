const { DataTypes } = require("sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define("rastro", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    caso: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    clasificacion: { type: DataTypes.STRING, allowNull: false },
    // imagen:{type:DataTypes.BUFFER, allowNull:false},
    entry: { type: DataTypes.DATEONLY },
    exit: { type: DataTypes.DATEONLY },
    
  });
};
