const express = require('express')
const router = express.Router()

const rutaController = require('../controllers/rutaController')

//Mostrar todas las rutas (GET)
router.get('/rutas', rutaController.mostrar)

//Crear rutas (POST)
router.post('/rutas/crear', rutaController.crear)

//Editar rutas (POST)
router.post('/rutas/editar', rutaController.editar)

//Eliminar rutas (GET)
router.get('/rutas/borrar/:id', rutaController.borrar)

//Mostrar todos las rutas en Admin (GET)
router.get('/modalTwoA', rutaController.verAdmin)

//Mostrar todos las rutas en Customer (GET)
router.get('/modalTwoC', rutaController.verCustomer)

module.exports = router