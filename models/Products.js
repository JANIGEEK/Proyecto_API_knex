// Modelo trae los datos de la DB
// No valida datos ni resuelve promesas, para eso esta el controlador

// Traer la configuracion del entorno de knex y los detalles de conexion de la DB
const knex = require('../config')

// Crear una funcion que cree un nuevo registro
const create = (bodyProduct) => {
  return knex
    .insert(bodyProduct) // Datos que se van a inertar
    .into('products') // Lugar donde se insertara
    .returning('*') // Datos que me va a retornar
}

// Exportar funciones
module.exports = {
  create
}
