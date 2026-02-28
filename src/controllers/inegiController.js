import { obtenerIndicadorINEGI } from '../services/inegiService.js'

export const mostrarINEGI = async (req, res) => {
  const { indicador } = req.query
  let datos = null

  try {
    if (indicador) {
      const token = process.env.INEGI_KEY
      const respuesta = await obtenerIndicadorINEGI(indicador, token)

      datos = respuesta.Series?.[0]?.OBSERVATIONS || []
    }

    res.render('inegi', {
      pagina: 'INEGI - Indicadores',
      datos,
      indicador: indicador || ''
    })

  } catch (error) {
    console.log(error)
    res.send('Error al conectar con INEGI')
  }
}