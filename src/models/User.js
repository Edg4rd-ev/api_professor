const Sequelize = require('sequelize');
const dataBase = require('../dataBase');

const User = dataBase.define('users', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

//cria a table
//User.sync();

module.exports = User;