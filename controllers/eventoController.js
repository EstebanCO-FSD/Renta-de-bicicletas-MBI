const Evento = require('../model/Evento')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Evento.find({}, (error, eventos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar los eventos'
            })
        }
        return res.render('admin/eventos', {eventos})
    })
}

//Ver en el modalOne en Admin
module.exports.verAdmin = (req, res)=>{
    Evento.find({}, (error, eventos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar los eventos'
            })
        }
        return res.render('admin/modalAdmin/modalOne', {eventos})
    })
}

//Ver en el modalOne en Customer
module.exports.verCustomer = (req, res)=>{
    Evento.find({}, (error, eventos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar los eventos'
            })
        }
        return res.render('customer/modalCustomer/modalOne', {eventos})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const evento = new Evento({
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        descripcion: req.body.descripcion
    })
    evento.save(function(error,evento){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el evento'
            })
        }
        res.redirect('/eventos')
    })
}

//Editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const fecha = req.body.fecha_editar
    const lugar = req.body.lugar_editar
    const descripcion = req.body.descripcion_editar
    Evento.findByIdAndUpdate(id, {nombre, fecha, lugar, descripcion}, (error, evento)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al actualizar el evento'
            })
        }
        res.redirect('/eventos')
    })
}

//Eliminar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Evento.findByIdAndRemove(id, (error, evento)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar el evento'
            })
        }
        res.redirect('/eventos')
    })
}