const db = require('../config/db');
const Sequelize = db.Sequelize;
const Product = require('./products')

const Reviews = db.define('reviews', {
    text:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    rate:{
        type:Sequelize.INTEGER
    }
})
module.exports=Reviews;