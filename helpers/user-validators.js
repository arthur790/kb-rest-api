const User = require("../models/user");

const existsEmail = async(correo = '') =>{

    //Verificar si el correo existe
    const existeEmail =  await User.findOne({
        where:{
            email: correo
        }
    });

    if (existeEmail){
        throw new Error(`El correo ${correo} ya está registrado`);
    }
}

module.exports = {
    existsEmail
}