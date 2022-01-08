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
 
    const listaDB = await Lista.find( {nombre, 
                                      usuario: user_id});
    console.log(listaDB);
    // if(listaDB.estado) {
    //   console.log('in true')
    // }
    // // if(listaDB[0]){
      // if(listaDB[listaDB.length - 1].estado === true){
      //   return res.status(401).json({
      //                 msg: `La lista ${listaDB[0].nombre}, ya existe`
      //             });

      // }
    // }

    if(listaDB.find(lista => lista.estado === true)){
      return res.status(401).json({
                    msg: `La lista ${listaDB[0].nombre}, ya existe`
                });

    }

    try {

      // const lista;
      // if(listaDB[0])
      
      // if(listaDB[0].estado === true){
      //   return res.status(400).json({
      //             msg: `La lista ${listaDB[0].nombre}, ya existe`
      //         });
      // }
  
      // if(listaDB[0].estado === false) {
        // console.log('funciono')
        // lista = await Lista.findByIdAndUpdate( id, {estado : true}, { new: true});
      // }
      // Generar la data a guardar
  
      const data = {
          nombre,
          usuario : user_id
      }
  
      const lista = new Lista( data);

      await lista.save();

      res.status(201).json({lista});
      
    } catch (error) {
      console.log(error)
    }
    

    //Guardar DB
 
}

  const actualizarLista = async(req, res) => {

    const {id} = req.params;
    // const {_id, usuario, fecha, estado, ...data} = req.body;
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