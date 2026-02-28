import { buscarImagenesNASA, obtenerAPOD } from '../services/nasaService.js'

export const mostrarNASA = async (req, res) => {
  const { q, apod } = req.query

  let imagenes = []
  let apodData = null

  try {
    // 🔍 Buscador
    if (q) {
      imagenes = await buscarImagenesNASA(q)
    }

    // 🌅 Imagen del día
    if (apod) {
      const apiKey = process.env.NASA_KEY
      apodData = await obtenerAPOD(apiKey)
    }

    res.render('nasa', {
      pagina: 'Explorador NASA',
      imagenes,
      apodData,
      busqueda: q || ''
    })

  } catch (error) {
    console.log(error)
    res.send('Error al conectar con NASA')
  }
}