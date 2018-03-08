'use strict';

const db = require('../config/db');
const Sequelize = db.Sequelize;

const User = db.define('user', {
    
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    fullName: {
        type: Sequelize.VIRTUAL,
        get() {
            return this.getDataValue("firstName") + " " + this.getDataValue("lastName")
        }      
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },

})

User.prototype.verifyPassword = function(password) {
    // ENCRIPTEN ESTA MIERDA
    return password == this.password;
}

module.exports = User;