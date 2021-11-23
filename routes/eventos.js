const express = require('express')
const router = express.Router()

const eventoController = require('../controllers/eventoController')

//Mostrar todos los eventos (GET)
router.get('/eventos', eventoController.mostrar)

//Crear eventos (POST)
router.post('/eventos/crear', eventoController.crear)

//Editar eventos (POST)
router.post('/eventos/editar', eventoController.editar)

//Eliminar eventos (GET)
router.get('/eventos/borrar/:id', eventoController.borrar)

//Mostrar todos los eventos en Admin (GET)
router.get('/modalOneA', eventoController.verAdmin)

//Mostrar todos los eventos en Customer (GET)
router.get('/modalOneC', eventoController.verCustomer)


module.exports = router