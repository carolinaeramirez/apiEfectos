const Sequelize = require("sequelize");

const efectModel = require("./models/efect");
const userModel = require("./models/user");

const sequelize = new Sequelize("efectos_crim", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Efect = efectModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("tablas sincronizadas");
});

module.exports = {
  Efect,
  User,
};
