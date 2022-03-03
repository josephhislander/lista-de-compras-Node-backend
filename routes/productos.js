const { Router} = require('express');
const { check } = require('express-validator');

const { 
    crearProducto,
    obtenerProductosDeLista,
    actualizarProducto,
    borrarProducto,
    borrarProductos
    } = require('../controllers/productos');


const { 
    usuarioTieneLista,
    existeProducto 
    } = require('../helpers');

const {
    validarCampos, 
    validarJWT,
    validarPermiso
    }  = require('../middlewares');

const router = Router();

//Obtener productos de una lista - privado solo el usuario  que la creo

// router.get('/:id', [
//     validarJWT,
//     check('id', 'No es un id de Mongo válido').isMongoId(),
//     validarPermiso,
//     check('id').custom(usuarioTieneLista),
//     validarCampos
// ] , obtenerProductosDeLista
// );

router.get('/', [
    validarJWT,
    // check('id', 'No es un id de Mongo válido').isMongoId(),
    validarPermiso,
    // check('id').custom(usuarioTieneLista),
    validarCampos
] , obtenerProductosDeLista
);

//Crear producto - privado - cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    // check('lista', 'El id de lista es obligatorio').not().isEmpty(),
    validarCampos
], crearProducto);

// Actualizar - privado - solo el usuario que la creo
router.put('/:id', [
    validarJWT,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeProducto),
    validarPermiso,
    validarCampos
], actualizarProducto
);

// //Borrar producto - privado - solo el usuario que la creo
router.delete('/product', [
    validarJWT,
    validarPermiso,
    // check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos
], borrarProducto
);

router.delete('/', [
    validarJWT,
    validarPermiso,
    validarCampos
], borrarProductos
);

module.exports = router;