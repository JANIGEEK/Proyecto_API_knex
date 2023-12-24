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

const findAll = () => {
  return knex
    .select(['product_id', 'name', 'description', 'price',
      'sku', 'created_at']) // Elegir que datos va a devolver
    .from('products') // El lugar de donde se va a traer los datos
    .where({ active: true }) // Traer datos que no tengas un soft delete
}

const findById = (productId) => {
  return knex
    .select(['product_id', 'name', 'description', 'price',
      'sku', 'created_at'])
    .from('products')
    .where({ active: true })
    .where({ product_id: productId }) // Condicion para elegir un dato
}

const update = (productId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('products')
    .where({ product_id: productId })
    .returning('*')
}

const destroy = (productId) => {
  return knex
    .del() // Eliminar dato
    .from('products')
    .where({ product_id: productId })
}

const softDestroy = (productId) => {
  return knex
    .update({ active: false })
    .from('products')
    .where({ product_id: productId })
}

// Exportar funciones
module.exports = {
  create,
  findAll,
  findById,
  update,
  destroy,
  softDestroy
}
