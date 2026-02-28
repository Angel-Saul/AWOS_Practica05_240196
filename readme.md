# Dashboard de Consumo de APIs Públicas

Este proyecto es una **aplicación web para consumir APIs públicas reales** de instituciones y servicios relevantes como INEGI, FIFA y NASA, mostrando datos interesantes y visuales en una interfaz sencilla y estética utilizando **Express, Pug y Tailwind CSS**.

Está diseñado como una práctica avanzada de consumo de APIs REST y construcción de dashboards dinámicos.

---

## 🚀 ¿Qué muestra este proyecto?

La aplicación permite visualizar:

🔹 **🚀 NASA (National Aeronautics and Space Administration):**  
API de imagen del día y contenido multimedia espacial.

🔹 **📊 INEGI (Instituto Nacional de Estadística y Geografía):**  
Datos y estadísticas oficiales de México para visualización en gráficas.

🔹 **⚽ FIFA / APIs de fútbol:**  
Información de competiciones, tablas de posiciones, datos de selecciones/ligas.

---

## Tabla de ENDPOINTS
| #  | API   | Endpoint                                    | Descripción            |
| -- | ----- | ------------------------------------------- | ---------------------- |
| 1  | NASA  | /planetary/apod                             | Imagen del día         |
| 2  | NASA  | /mars-photos/api/v1/rovers/curiosity/photos | Fotos de Marte         |
| 3  | NASA  | /neo/rest/v1/feed                           | Asteroides cercanos    |
| 4  | NASA  | /planetary/earth/assets                     | Imágenes satelitales   |
| 5  | NASA  | /EPIC/api/natural                           | Imágenes Tierra        |
| 6  | INEGI | /indicadores                                | Indicadores económicos |
| 7  | INEGI | /series                                     | Series históricas      |
| 8  | INEGI | /datos                                      | Datos por entidad      |
| 9  | INEGI | /metadatos                                  | Metadatos              |
| 10 | INEGI | /censos                                     | Datos censales         |
| 11 | FIFA  | /competitions                               | Competiciones          |
| 12 | FIFA  | /teams                                      | Equipos                |
| 13 | FIFA  | /players                                    | Jugadores              |
| 14 | FIFA  | /standings                                  | Tabla                  |
| 15 | FIFA  | /matches                                    | Partidos               |
| 16 | NASA  | /techtransfer/patent                        | Patentes               |
| 17 | NASA  | /insight_weather                            | Clima Marte            |
| 18 | INEGI | /historicos                                 | Datos históricos       |
| 19 | FIFA  | /scorers                                    | Goleadores             |
| 20 | FIFA  | /fixtures                                   | Próximos partidos      |

---
## Estructura del proyecto
|No.|Descripción|Estatus|
|---|---|---|---|
|1.| Configurar package.json | ✅ Finalizado |
|2.| Crear estructura base  | ✅ Finalizado |
|3.| Configurar Express | ✅ Finalizado |
|4.| Configurar Tailwind  | ✅ Finalizado |
|5.| Creación de las vistas | ❌ |
|6.| Pruebas | ❌ |
|7.| Documentación | ❌ |
