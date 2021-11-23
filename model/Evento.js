const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const eventoSchema = new Schema ({
    nombre: String,
    fecha: String,
    lugar: String,
    descripcion: String
}, {versionKey:false})

module.exports = mongoose.model('eventos', eventoSchema)