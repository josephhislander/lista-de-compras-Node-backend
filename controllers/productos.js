const { request, response } = require('express');

const { Producto} = require('../models');



  const obtenerProductosDeLista = async(req = request, res = response) => {

    const user_id = req.header('user-id');
    const {id} = req.params;
    // const objectId = mongoose.Types.ObjectId(user_id);

    const { limite = 5, desde = 0 } = req.query;
    // const query = { estado: true};

    // 
    const  [total, productos] = await Promise.all([
      Producto.countDocuments({usuario: user_id, estado: true}),
      Producto.find({  
                    lista: id,
                    usuario: user_id,
                    estado: true
                  })
        .skip(Number(desde))
        .limit(Number(limite))
      
    ]);

    console.log({total, productos, user_id});

    res.json({
      total,
      productos,
      // objectId
    });
  }

  const crearProducto = async(req, res = response) => {

    const {nombre, lista, cantidad} = req.body;
    const Nombre = nombre.toUpperCase();

    // const productoDB = await Producto.find( {nombre: Nombre, 
    //                                          lista: lista});
    // if(productoDB[0]) {
    //   return res.status(400).json({
    //             msg: `El producto ${productoDB[0].nombre}, ya existe`
    //         });
    // }

    // Generar la data a guardar

    const data = {
        nombre: Nombre,
        usuario: req.usuario._id,
        lista,
        cantidad
    }

    const producto = new Producto( data);

    //Guardar DB
    await producto.save();

    res.status(201).json({producto});
}

  const actualizarProducto = async(req, res) => {

    const {id} = req.params;
    const {_id, usuario, lista, estado, ...data} = req.body;


    // To do validar contra base de datos
   
    const producto = await Producto.findByIdAndUpdate( id, data, { new: true});


    res.status(201).json({
        msg: "Actualizado",
        producto
    });
  }


  const borrarProducto = async(req = request, res) => {
    
  const { id} = req.params;

  const producto = await Producto.findByIdAndUpdate( id, { estado : false} );

    res.json(
        producto
    );
  }





  module.exports = {
      obtenerProductosDeLista,
      crearProducto,
      actualizarProducto,
      borrarProducto

  }