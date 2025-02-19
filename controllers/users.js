
const bcryptjs = require('bcryptjs');
const User = require('../models/user');


const  newUser = async (req, res) => {

    
    const { body } = req;

    
     //encriptar contraseña
     const salt = bcryptjs.genSaltSync();
     body.password = bcryptjs.hashSync(body.password, salt);

     console.log('BODY', body);

    const user = User.build(body);




    await user.save();

    const { password, updatedAt, ...userResult} = user.dataValues;

    res.json(userResult);

};

const getUsuarioFromToken = async  (req, res) => {

    const { usuario } = req;

    return res.json(usuario);


}





module.exports = {
    newUser,
    getUsuarioFromToken
}