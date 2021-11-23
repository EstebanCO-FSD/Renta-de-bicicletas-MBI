const Competencia = require('../model/Competencia')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Competencia.find({}, (error, competencias)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar las competencias'
            })
        }
        return res.render('admin/competencias', {competencias})
    })
}

//Ver en el modalThree en Admin
module.exports.verAdmin = (req, res)=>{
    Competencia.find({}, (error, competencias)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar las competencias'
            })
        }
        return res.render('admin/modalAdmin/modalThree', {competencias})
    })
}

//Ver en el modalThree en Customer
module.exports.verCustomer = (req, res)=>{
    Competencia.find({}, (error, competencias)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar las competencias'
            })
        }
        return res.render('customer/modalCustomer/modalThree', {competencias})
    })
}


//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const competencia = new Competencia({
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        descripcion: req.body.descripcion
    })
    competencia.save(function(error,competencia){
        if(error){
            return res.status(500).json({
                message: 'Error al crear la competencia'
            })
        }
        res.redirect('/competencias')
    })
}

//Editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const fecha = req.body.fecha_editar
    const lugar = req.body.lugar_editar
    const descripcion = req.body.descripcion_editar
    Competencia.findByIdAndUpdate(id, {nombre, fecha, lugar, descripcion}, (error, competencia)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al actualizar la competencia'
            })
        }
        res.redirect('/competencias')
    })
}

//Eliminar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Competencia.findByIdAndRemove(id, (error, competencia)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar la competencia'
            })
        }
        res.redirect('/competencias')
    })
}