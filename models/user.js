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
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

},  { tableName: 'users' })


User.belongsTo(Role, {foreignKey: "roleId"})
module.exports = User
