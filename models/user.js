const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/config');
const Role = require('./role');


const User = sequelize.define('Users',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },

},  { tableName: 'users' })


User.belongsTo(Role, {foreignKey: "roleId"})
module.exports = User
