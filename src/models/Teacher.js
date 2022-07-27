const Sequelize = require('sequelize');
const dataBase = require('../dataBase');

const Teacher = dataBase.define('professor', {
  id_professor:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  id_titulo:{
    type: Sequelize.INTEGER,
    allowNull: false,
    foreingKey: true
  },
  tx_nome:{
    type: Sequelize.STRING,
    allowNull: false
  },
  tx_sexo:{
    type: Sequelize.CHAR,
    allowNull: false
  },
  tx_estado_civil:{
    type: Sequelize.CHAR,
    allowNull: false
  },
  dt_nascimento:{
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  tx_telefone:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

//Teacher.sync();

module.exports = Teacher;