var Categories = require('./categories');
var Product = require('./products');
var User = require('./users')
const db = require('../config/db');
const Sequelize = db.Sequelize;

const Carrito = db.define('carrito', {
    cantidad:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1,
    }
})

Product.belongsToMany(Categories,{through: 'CatProds'});
Categories.belongsToMany(Product,{through: 'CatProds'});
User.belongsToMany(Product,{through: Carrito});
Product.belongsToMany(User,{through: Carrito});




module.exports={
    User,
    Product,
    Categories
}