const {  DataTypes} = require('sequelize');
const {sequelize} = require('../database/config');


const Role = sequelize.define('Roles',{
    description: {
        type: DataTypes.STRING
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
    
}, { tableName: 'roles' })


module.exports = Role;  