const Sequelize = require('sequelize');
const app = require('../app.js');

// conecto la base de datos:
const db = new Sequelize('postgres://localhost:5432/ecommerce');

// sincronizo la base de datos:
db.sync({force: false})
.then (() => {
    app.listen(3005, console.log('listening on port 3005'));
} )

module.exports = db;