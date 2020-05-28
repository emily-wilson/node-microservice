var { Sequelize } = require('sequelize');

var db = new Sequelize('postgres://postgres@postgres:5432/test');

module.exports = db;
