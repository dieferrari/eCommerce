const db = require('../config/db')
const Sequelize = db.Sequelize

const Orders = db.define('orders', {
status:{type:Sequelize.STRING,
        allowNull:false,
        defaultValue:'creado'},
OwnerDirection:{type:Sequelize.STRING,
        allowNull:false,
        defaultValue:'Direccion del perfil del Usuario'},
OwnerMail:{type:Sequelize.STRING,
        allowNull:false,
        defaultValue:'Email personal del usuario'}
})

module.exports = Orders
