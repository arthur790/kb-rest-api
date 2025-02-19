const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { validarCampos, validateFields } = require('../middlewares/validate-fields');
const { existsEmail } = require('../helpers/user-validators');
const { isValidRole } = require('../helpers/role-validators');
const { newUser, getUsuarioFromToken } = require('../controllers/users');
const { validateJWT } = require('../middlewares');

router.post('/', [
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(existsEmail),
    check('roleId').custom(isValidRole),
    check('name',  'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe contener más 6 caracteres').isLength({ min: 6 }),
    check('roleId', 'El rol es obligatorio').not().isEmpty(),
    validateFields
],newUser);

router.get('/protected', [
    validateJWT
], getUsuarioFromToken);

module.exports = router;