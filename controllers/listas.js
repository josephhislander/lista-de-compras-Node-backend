const { request, response } = require('express');
const {Lista} = require('../models');



  const obtenerListas = async(req = request, res = response) => {

    const user_id = req.header('user-id');

    try {

      const { limite = 25, desde = 0 } = req.query;
  
      const  [total, listas] = await Promise.all([
        Lista.countDocuments({usuario: user_id}),
        Lista.find({  
                      estado: true,
                      usuario: user_id
                    })
          .skip(Number(desde))
          .limit(Number(limite))
        
      ]);
  
      res.json({
        total,
        listas
      });
      
    } catch (error) {
      console.log(error);
    }    
  }

  const crearLista = async(req, res = response) => {
    const nombre = req.body.nombre.toUpperCase();
    const user_id = req.body.uid;
    try {
      const data = {
          nombre,
          usuario : user_id
      }
  
      const lista = new Lista( data);

      await lista.save();

      res.status(201).json({lista, ok: true});
      
    } catch (error) {
      console.log(error)
    }
    

    //Guardar DB
 
}

  const actualizarLista = async(req, res) => {

    const {id} = req.params;
    const data = {
      nombre: req.body.nombre.toUpperCase(),
      products: req.body.products,
      uid: req.body.uid,
      presupuesto: req.body.presupuesto
    }


    // To do validar contra base de datos
   try {
     
     const lista = await Lista.findByIdAndUpdate( id, data, { new: true});
 
     res.status(201).json({
         msg: "Actualizado",
         lista
     });
   } catch (error) {
     console.log(error)
   }
  }


  const borrarLista = async(req = request, res) => {
    
  const { id} = req.params;

  const lista = await Lista.findByIdAndUpdate( id, { estado : false}, { new: true} );

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