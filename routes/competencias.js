const express = require('express')
const router = express.Router()

const competenciaController = require('../controllers/competenciaController')

//Mostrar todas las rutas (GET)
router.get('/competencias', competenciaController.mostrar)

//Crear rutas (POST)
router.post('/competencias/crear', competenciaController.crear)

//Editar rutas (POST)
router.post('/competencias/editar', competenciaController.editar)

//Eliminar rutas (GET)
router.get('/competencias/borrar/:id', competenciaController.borrar)

//Mostrar todos las rutas en Admin (GET)
router.get('/modalThreeA', competenciaController.verAdmin)

//Mostrar todos las rutas en Customer (GET)
router.get('/modalThreeC', competenciaController.verCustomer)

module.exports = router