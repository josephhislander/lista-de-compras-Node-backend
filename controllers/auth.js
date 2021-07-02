const {response, request} = require('express');
const bcryptjs = require('bcrypt');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers');
const { googleVerify } = require('../helpers/google.verify');

const login = async(req = request, res = response) => {

    const { correo, password} = req.body

    try {

        // Verificar si el email exite
        const usuario = await Usuario.findOne({correo});

        if ( !usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });

        }

        // Si el usuario esta activo

        if ( !usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });

        }

        // Verificacion de la contraseña

        const validPassword = bcryptjs.compareSync( password, usuario.password);

        if ( !validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });

        }

        // Generar JWT
        const id = usuario.id;
        const token = await generarJWT(id)

        
        res.json({
            usuario,
            token,
            id
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

  

}


const googleSignin = async (req, res = response) =>{

    const { id_token} = req.body;

    
    try {
        
        const {correo, nombre, img} = await googleVerify( id_token);

        let usuario = await Usuario.findOne({ correo});

        if( !usuario ){
            //tengo que crearlo
            const data = {
                nombre,
                correo,
                password: ':P',
                img,
                google: true
            };

            usuario = new Usuario(data);
            await usuario.save();
        }

        // Si el usuario  en BD es false

        if( !usuario.estado) {
            return res.status(401).json({
                msg: 'Hable con el administrador, usuario bloqueado'
            })
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id)


        
        res.json({
            usuario,
            token,
            id_token
        });

    } catch (error) {
        
        res.status(400).json({
            msg: 'Token de google no es valido'
        })
    }

}


module.exports = {
    login,
    googleSignin
}