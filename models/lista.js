const {Schema, model} = require('mongoose');

const ListaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligaorio']
    },

    fecha:{
        type: Date,
        default: Date.now
    },


    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    productos: {
        type: Array
    },
    presupuesto: {
        type: Number,
        default: 0,
        required: true
    }
});

ListaSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject();
    return data;
}



module.exports = model('Lista', ListaSchema);