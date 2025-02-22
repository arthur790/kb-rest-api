const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false}
  }
});

module.exports = {
    sequelize
}