const db = require('../config/db');
const Sequelize = db.Sequelize;
const Product = require('./products')

const Categories = db.define('categories', {
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports=Categories;