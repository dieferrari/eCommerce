const db = require('../config/db');
const Sequelize = db.Sequelize;
const Categories = require('./categories')

const Product = db.define('product', {
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.TEXT,
    },
    price:{
        type:Sequelize.INTEGER,
    },
    stock:{
        type:Sequelize.INTEGER,
    },
    imgURL:{
        type:Sequelize.STRING,
    },
    available:{ type: Sequelize.BOOLEAN,
         allowNull: false,
          defaultValue: true }
})

module.exports=Product;