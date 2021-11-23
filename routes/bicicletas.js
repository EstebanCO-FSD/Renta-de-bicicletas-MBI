const express = require('express')
const router = express.Router()

const biciController = require('../controllers/biciController')

//Mostrar todas las bicicletas en Admin (GET)
router.get('/bicicletasA', biciController.mostrarAdmin)

//Mostrar todas las bicicletas en Customer (GET)
router.get('/bicicletasC', biciController.mostrarCustomer)

//Crear bicicletas (POST)
router.post('/bicicletas/crear', biciController.crear)

//Editar rutas (POST)
router.post('/bicicletas/editar', biciController.editar)

//Estado rutas en Admin (GET)
router.get('/bicicletas/estadoA/:id', biciController.estadoAdmin)

//Estado rutas en Customer (GET)
router.get('/bicicletas/estadoC/:id', biciController.estadoCustomer)

//Eliminar rutas (GET)
router.get('/bicicletas/borrar/:id', biciController.borrar)

module.exports = router