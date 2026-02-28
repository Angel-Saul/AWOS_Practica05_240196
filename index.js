import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import nasaRoutes from './src/routes/nasaRoutes.js'

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/views'))

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Rutas externas
app.use('/', nasaRoutes)

// Ruta principal
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(40196, () => {
  console.log('Servidor corriendo en http://localhost:40196')
})