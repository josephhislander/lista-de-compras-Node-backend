const { request, response } = require('express');

const { Producto} = require('../models');



  const obtenerProductosDeLista = async(req = request, res = response) => {

    const user_id = req.header('user-id');
    const list_id = req.header('list-id');
    const { limite = 20, desde = 0 } = req.query;
    const  [total, productos] = await Promise.all([
      Producto.countDocuments({usuario: user_id, estado: true}),
      Producto.find({  
                    lista: list_id,
                    usuario: user_id,
                    estado: true
                  })
        .skip(Number(desde))
        .limit(Number(limite))
      
    ]);

    console.log({total, productos, user_id});

    res.json({
      total,
      productos
    });
  }

  const crearProducto = async(req, res = response) => {

    const {nombre, lista, cantidad} = req.body;
    const Nombre = nombre.toUpperCase();
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
    
    const producto_id = req.header('producto-id');

  const producto = await Producto.findByIdAndUpdate( {_id : producto_id}, { estado : false} );

    res.status(201).json({
       msg: 'Producto eliminado',
        producto}
    );
  }

  const borrarProductos = async(req= request, res) => {


    const list_id = req.header('list-id');

    const productos = await Producto.deleteMany({ lista: list_id });

     res.status(201).json({
        msg: "Eliminados",
        productos
    });

  }

  module.exports = {
      obtenerProductosDeLista,
      crearProducto,
      actualizarProducto,
      borrarProducto,
      borrarProductos

  }