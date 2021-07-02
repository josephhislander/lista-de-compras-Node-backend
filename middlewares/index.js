const validarCampos = require('../middlewares/validar-campos');
const validarJWT    = require('../middlewares/validar-jwt');
const validarRoles  = require('../middlewares/validar-roles');
const validarPermiso = require('./validar-permiso');


module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarRoles,
    ...validarPermiso
}