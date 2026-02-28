// src/routes/nasaRoutes.js

import express from 'express'
import { mostrarNASA } from '../controllers/nasaController.js'

const router = express.Router()

router.get('/nasa', mostrarNASA)

export default router