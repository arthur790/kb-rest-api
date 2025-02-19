const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { validarCampos } = require('../middlewares/validate-fields');
const { existsEmail } = require('../helpers/user-validators');
const { isValidRole } = require('../helpers/role-validators');
const { newUser } = require('../controllers/users');

router.post('/', [
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(existsEmail),
    check('roleId').custom(isValidRole),
    check('name',  'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe contener más 6 caracteres').isLength({ min: 6 }),
    check('roleId', 'El rol es obligatorio').not().isEmpty(),
    validarCampos
],newUser);

module.exports = router;