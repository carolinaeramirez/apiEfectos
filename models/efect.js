const { DataTypes } = require("sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define("efect", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    legajo: { type: DataTypes.STRING, allowNull: false },
    caso: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    observaciones: { type: DataTypes.STRING, allowNull: false },
    fecha_entrada: { type: DataTypes.DATEONLY, allowNull:false },
    fecha_salida: { type: DataTypes.DATEONLY, allowNull:false},
    
  });
};
