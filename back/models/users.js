'use strict';

const db = require('../config/db');
const Sequelize = db.Sequelize;
var crypto = require('crypto');

const User = db.define('user', {
    
    firstName: {
        type: Sequelize.STRING,
    },

    lastName: {
        type: Sequelize.STRING,
    },

    fullName: {
        type: Sequelize.VIRTUAL,
        get() {
            return this.getDataValue("firstName") + " " + this.getDataValue("lastName")
        }      
    },
    isAdmin:{ type: Sequelize.BOOLEAN,
        allowNull: false,
         defaultValue: false },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },

    password: {
        type: Sequelize.STRING,
    },
    salt: {
        type:Sequelize.STRING,
    },
    facebookId:{
        type:Sequelize.STRING
    },
    googleId:{
        type:Sequelize.STRING
    }
}, {
    setterMethods: {
        password: function (userpassword) {
            var salt = this.genRandomString();
            var passwordData = this.sha512(userpassword, salt);
            this.setDataValue('password', passwordData)
            this.setDataValue('salt', salt)
        }
    }
})
User.prototype.genRandomString = function () {
    return crypto.randomBytes(20).toString('hex')
};
User.prototype.sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha1', salt).update(password).digest('hex')
    return hash
};
User.prototype.verifyPassword = function(password) {
    password=this.sha512(password,this.salt)
    return password == this.password;
}

module.exports = User;