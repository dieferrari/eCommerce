const Sequelize = require('sequelize');

// conecto la base de datos:
const db = new Sequelize('postgres://localhost:5432/ecommerce', { logging: false});

// sincronizo la base de datos:

module.exports = db;