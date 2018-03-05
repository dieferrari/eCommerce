const Sequelize = require('sequelize');
const app = require('../app.js');

// conecto la base de datos:
const db = new Sequelize('postgres://localhost:5432/ecommerce');

// sincronizo la base de datos:
db.sync({force: false})
.then (() => {
    console.log('db sync')
} )

module.exports = db;