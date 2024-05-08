const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "thpo4327", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
