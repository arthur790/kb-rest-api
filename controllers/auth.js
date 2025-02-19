
const { response } = require("express");
const bcryptjs = require('bcryptjs');
const User = require("../models/user");
const { generateJWT } = require("../helpers/generate-jwt");


const login = async(req, res = response) =>{
    const { email, password } = req.body;

    try{

        const usuario = await User.findOne({
            where: {
                email: email
            }
        });

        if(!usuario){
            return res.status(400).json({
                msj: 'Lo sentimos al parecer tu usuario o password son incorrectos'
            })
        }

        if(usuario.status != 1){
            return res.status(400).json({
                msj: 'Lo sentimos al parecer tu usuario o password son incorrectos'
            })
        }
        const isValidPassword = bcryptjs.compareSync(password, usuario.password);

        if(!isValidPassword){
            return res.status(401).json({
                msj: 'Lo sentimos al parecer tu usuario o password son incorrectos'
            })
        }


        const token = await generateJWT(usuario.id);


        return res.json({
            token
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            msj: 'Algo salio mal, hable con el administrador'
        });
    }
    
};


module.exports = {
    login
}