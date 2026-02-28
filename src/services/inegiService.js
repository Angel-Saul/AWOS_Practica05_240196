// src/services/inegiService.js

export const obtenerIndicadorINEGI = async (indicador, token) => {
  const url = `https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${indicador}/es/0700/false/BIE/2.0/${token}?type=json`

  const response = await fetch(url)
  const data = await response.json()

  return data
}