const {Schema, model} = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligaorio'],
    },

    cantidad: {
        type: Number,
        default: 1
    },
    Precio: {
        type: Number,
        default: 0
    },

    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    lista: {
        type: Schema.Types.ObjectId,
        ref: 'Lista',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

ProductoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject();
    return data;
}



module.exports = model('Producto', ProductoSchema);