const { DataTypes } = require('sequelize');
const db = require('./db');

const Task = db.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descr: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Task;
