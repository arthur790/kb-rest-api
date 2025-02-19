
const { response } = require("express");


const login = async(req, res = response) =>{
    const { correo, password } = req.body;

    try{

     

        return res.json({
            msg: 'OK'
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