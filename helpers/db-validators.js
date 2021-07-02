const {Usuario, Role, Lista, Producto} = require('../models');
const mongoose = require('mongoose');


const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol});

    if ( !existeRol) {
      throw new Error(`El rol ${rol} no esta registrado en la BD `)
    }
  }

  const emailExiste = async(correo = '') => {

    const existeEmail = await Usuario.findOne({correo});

    if( existeEmail){
    throw new Error(`El email ${correo} ya esta registrado en la BD `)
    // return res.status(400).json({
    //   msg: ' Ese correo ya esta registrado'
    // });
  }
}

const existeUsuarioPorId = async( id ) => {

  const existeUsuario = await Usuario.findById(id);

  if( !existeUsuario){
  throw new Error(`El id ${id} no existe `);

}
}


//  Listas

const usuarioTieneLista = async( id) => {

  const objectId = mongoose.Types.ObjectId(id);
  const existeLista = await Lista.find({usuario: objectId});

  console.log(existeLista);
  if( existeLista.total === 0 ) {
    throw new Error( `El usuario con ${id} no tiene listas`);
  }

}

const exiteLista = async (id) => {

  const existe = await Lista.findById(id);

  if(!existe) {
    throw new Error(`La lista con id ${id} no existe`);
  }
}

// Productos

const existeProducto = async(id) => {

  const existe = await Producto.findById(id);

  if(!existe) {
    throw new Error(`El producto con id ${id} no existe`);
  }
}


module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
  usuarioTieneLista,
  exiteLista,
  existeProducto 

}