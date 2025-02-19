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
}, { tableName: 'roles' })


module.exports = Role;  