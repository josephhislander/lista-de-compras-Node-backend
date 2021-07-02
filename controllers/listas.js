const { request, response } = require('express');

const {Lista} = require('../models');



  const obtenerListas = async(req = request, res = response) => {


    const user_id = req.header('user-id');

    const { limite = 5, desde = 0 } = req.query;

    const  [total, listas] = await Promise.all([
      Lista.countDocuments({usuario: user_id}),
      Lista.find({  
                    estado: true,
                    usuario: user_id
                  })
        .skip(Number(desde))
        .limit(Number(limite))
      
    ]);

    console.log({total, listas, user_id});

    res.json({
      total,
      listas,
      // objectId
    });
  }

  const crearLista = async(req, res = response) => {

    const nombre = req.body.nombre.toUpperCase();
    const usuario = req.header("id-user")

    const listaDB = await Lista.find({ nombre: nombre, usuario: usuario});

    if(listaDB[0]) {
      return res.status(400).json({
                msg: `La lista ${listaDB[0].nombre}, ya existe`
            });
    }

    // Generar la data a guardar

    const data = {
        nombre,
        usuario: req.usuario._id
    }

    const lista = new Lista( data);

    //Guardar DB
    await lista.save();

    res.status(201).json({lista});
}

  const actualizarLista = async(req, res) => {

    const {id} = req.params;
    const {_id, usuario, fecha, estado, ...data} = req.body;


    // To do validar contra base de datos
   
    const lista = await Lista.findByIdAndUpdate( id, data, { new: true});

    res.status(201).json({
        msg: "Actualizado",
        lista
    });
  }


  const borrarLista = async(req = request, res) => {
    
  const { id} = req.params;

  const lista = await Lista.findByIdAndUpdate( id, { estado : false} );

    res.json(
       lista
    );
  }





  module.exports = {
      obtenerListas,
      crearLista,
      actualizarLista,
      borrarLista

  }