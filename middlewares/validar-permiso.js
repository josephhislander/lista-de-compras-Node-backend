const { Lista, Usuario, Producto } = require("../models");


const validarPermiso = async(req, res, next) => {

    const usuario = req.header('user-id');
    const {id} = req.params;

    try {
        
      
      // Comprobando que el usuario que solicita existe en DB
      const usuarioExiste = await Usuario.findById(usuario);
  
      if(!usuarioExiste) {
           return res.status(401).json({
              msg: 'No hay id de usuario en la peticion  usuario no existe en DB'
          })
      }

      //Comprabando si el usuario tiene listas creadas
      const usuarioTieneLista = await Lista.find( { usuario: usuario})

      if (!usuarioTieneLista) {
          return res.status(401).json({
              msg: 'Usuario no tiene listas'
          })
      }


      // Comprobando si la lista solicitada pertenece al usuario logeado

      const lista = await Lista.findById(id);
      
      if( lista ) {

        if( lista.usuario !=  usuario) {
            return res.status(401).json({
              msg: 'Esta lista no le pertenece al usuario logeado'
          })
          }
        
      } 

      // Comprobando si el producto solicitado pertenece al usuario logeado

      const producto = await Producto.findById(id)

      if(producto) {

        if( producto.usuario !=  usuario) {
            return res.status(401).json({
              msg: 'Este id de producto no esta en esta lista'
          })
          }

      }
      
      
   

      next();

  } catch (error) {
      console.log(error);
      res.status(401).json({
          msg: 'Error'
      })
  }


}


module.exports = {
    validarPermiso
}