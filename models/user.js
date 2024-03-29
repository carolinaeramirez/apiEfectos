const { DataTypes } = require("sequelize");
module.exports = (sequelize, type) => {
  return sequelize.define("user", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: { type: DataTypes.STRING  },
    lp: { type: DataTypes.INTEGER  },
    password: { type: DataTypes.STRING(150) },
  });
};
