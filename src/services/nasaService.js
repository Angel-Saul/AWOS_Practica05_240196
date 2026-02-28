export const buscarImagenesNASA = async (query) => {
  const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image`
  const response = await fetch(url)
  const data = await response.json()
  return data.collection.items
}

export const obtenerAPOD = async (apiKey) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  const response = await fetch(url)
  return await response.json()
}