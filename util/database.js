const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Effect!ve333', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
