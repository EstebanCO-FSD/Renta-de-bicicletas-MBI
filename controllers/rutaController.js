const Ruta = require('../model/Ruta')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Ruta.find({}, (error, rutas)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar las rutas'
            })
        }
        return res.render('admin/rutas', {rutas})
    })
}

//Ver en el modalTwo en Admin
module.exports.verAdmin = (req, res)=>{
    Ruta.find({}, (error, rutas)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar las rutas'
            })
        }
        return res.render('admin/modalAdmin/modalTwo', {rutas})
    })
}

//Ver en el modalTwo en Customer
module.exports.verCustomer = (req, res)=>{
    Ruta.find({}, (error, rutas)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar las rutas'
            })
        }
        return res.render('customer/modalCustomer/modalTwo', {rutas})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const ruta = new Ruta({
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        descripcion: req.body.descripcion
    })
    ruta.save(function(error,ruta){
        if(error){
            return res.status(500).json({
                message: 'Error al crear la ruta'
            })
        }
        res.redirect('/rutas')
    })
}

//Editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const fecha = req.body.fecha_editar
    const lugar = req.body.lugar_editar
    const descripcion = req.body.descripcion_editar
    Ruta.findByIdAndUpdate(id, {nombre, fecha, lugar, descripcion}, (error, ruta)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al actualizar la ruta'
            })
        }
        res.redirect('/rutas')
    })
}

//Eliminar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Ruta.findByIdAndRemove(id, (error, ruta)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar la ruta'
            })
        }
        res.redirect('/rutas')
    })
}