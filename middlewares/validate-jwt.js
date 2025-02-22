const jwt = require('jsonwebtoken');
const { request, response } = require('express');
const User = require('../models/user');

const validateJWT = async(req = request, res = response, next) =>{
    const token = req.header('x-token');

    if (!token){
        return res.status(401).json({
            msg: 'se requiere un token en la petición'
        });
    }
    
    try{
        const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY);

        //leer el usuario al que corresponde el uid
        const usuario = await User.findByPk(uid); 

        if (!usuario){
            return res.status(401).json({
                msg: 'el token no es válido'
            })
        }

        //verificar si el uid tiene estado en true
        if (!usuario.status){
            return res.status(401).json({
                msg: 'el token no es válido'
            })
        }

        const { password, ...userValues} = usuario.dataValues;

        req.usuario = userValues;

        next();
    }catch(err){
        console.log(err);
        res.status(401).json({
            msg: 'el token no es válido'
        })
    }
}


module.exports = {
    validateJWT
}