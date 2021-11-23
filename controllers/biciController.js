const Bicicleta = require('../model/Bicicleta')

//Mostrar en la vista del Administrador
module.exports.mostrarAdmin = (req, res)=>{
    Bicicleta.find({}, (error, bicicletas)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar las bicicletas'
            })
        }
        return res.render('admin/bicicletas', {bicicletas})
    })
}

//Mostrar en la vista del Cliente
module.exports.mostrarCustomer = (req, res)=>{
    Bicicleta.find({}, (error, bicicletas)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error  al mostrar las bicicletas'
            })
        }
        return res.render('customer/bicicletas', {bicicletas})
    })
}


//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const bicicleta = new Bicicleta({
        marca: req.body.marca,
        tipo: req.body.tipo,
        color: req.body.color,
        status: req.body.status
    })
    bicicleta.save(function(error,bicicleta){
        if(error){
            return res.status(500).json({
                message: 'Error al crear la bicicleta'
            })
        }
        res.redirect('/bicicletasA')
    })
}

//Editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const marca = req.body.marca_editar
    const tipo = req.body.tipo_editar
    const color = req.body.color_editar
    const status = req.body.status_editar
    Bicicleta.findByIdAndUpdate(id, {marca, tipo, color, status}, (error, bicicleta)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al actualizar la bicicleta'
            })
        }
        res.redirect('/bicicletasA')
    })
}

//Estado
module.exports.estadoAdmin = (async (req, res)=>{
    const id = req.params.id
    const task = await Bicicleta.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/bicicletasA',)
});

//Estado
module.exports.estadoCustomer = (async (req, res)=>{
    const id = req.params.id
    const task = await Bicicleta.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/bicicletasC',)
});

//Eliminar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Bicicleta.findByIdAndRemove(id, (error, bicicleta)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar la bicicleta'
            })
        }
        res.redirect('/bicicletasA')
    })
}