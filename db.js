const Sequelize = require("sequelize");

const efectModel = require("./models/efect");
const userModel = require("./models/user");
const rastrosModel = require("./models/rastros");
const informesModel = require("./models/informes");

const sequelize = new Sequelize("criminalistica", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Efect = efectModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);
const Rastros = rastrosModel(sequelize, Sequelize);
const Informes = informesModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("tablas sincronizadas");
});

module.exports = {
  Efect,
  User,
  Rastros,
  Informes
};
