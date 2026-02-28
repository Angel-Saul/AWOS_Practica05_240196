import express from 'express'
import { mostrarINEGI } from '../controllers/inegiController.js'

const router = express.Router()

router.get('/inegi', mostrarINEGI)

export default router