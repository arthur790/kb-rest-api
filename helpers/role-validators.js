const Role = require("../models/role");

const isValidRole = async(roleId = 0) => {
    const existeRol = await Role.findByPk(roleId)
    
    
    if(!existeRol){
        throw new Error(`El rol ${roleId} no está registrado en la BD`)
    }
};



module.exports = {
    isValidRole
}