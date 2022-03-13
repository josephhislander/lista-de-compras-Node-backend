const { Router} = require('express');
const { check } = require('express-validator');

const { 
        crearLista, 
        obtenerListas, 
        actualizarLista,
        borrarLista
} = require('../controllers/listas');


const {
    validarCampos, 
    validarJWT,
    validarPermiso
    }  = require('../middlewares')

const router = Router();

//Obtener una listas por usuario - privado solo el usuario  que la cre

router.get('/', [
    validarJWT,
    validarPermiso,
    validarCampos
] , obtenerListas);

//Crear Listas - privado - cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearLista);

//Actualizar - privado - solo el usuario que la creo
router.put('/:id', [
    validarJWT,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarPermiso,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
],actualizarLista
);

//Borrar una  Lista - privado
router.delete('/:id', [
    validarJWT,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarPermiso,
    validarCampos
], borrarLista
);

module.exports = router;