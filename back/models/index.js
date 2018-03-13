var Categories = require('./categories');
var Product = require('./products');
var User = require('./users')
var Reviews = require('./reviews')
let Orders = require('./orders');

const db = require('../config/db');
const Sequelize = db.Sequelize;

const Carrito = db.define('carrito', {
    cantidad:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1,
    }
})

const OrderProduct = db.define('orderProduct', {
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

User.hasMany( Reviews,{foreignKey:'AuthorId',as:'reviews'})
Product.hasMany( Reviews,{foreignKey:'ProductId',as:'reviews'})
Reviews.belongsTo(User,{as:'Author'})
Reviews.belongsTo(Product,{as:'Product'})

Orders.belongsToMany(Product,{through: OrderProduct});
Product.belongsToMany(Orders,{through: OrderProduct});
Orders.belongsTo(User,{as:'Owner'})
User.hasMany(Orders,{foreignKey: 'OwnerId',as:'orders'});


module.exports={
    User,
    Product,
    Categories,
    Reviews,
    OrderProduct,
    Carrito,
    Orders
}