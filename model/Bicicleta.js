const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const biciSchema = new Schema ({
    marca: String,
    tipo: String,
    color: String,
    status: {
        type: Boolean,
        daefault: false
    }
}, {versionKey:false})

module.exports = mongoose.model('bicicletas', biciSchema);