// Modelo de ventas

const knex = require('../config')

const create = (bodySale) => {
  return knex
    .insert(bodySale)
    .into('sales')
    .returning('*')
}

const findAll = () => {
  return knex
    .select(['sales_id', 'order_number', 'sales_date', 'product_quantity',
      'sales_price', 'user_id', 'product_id'])
    .from('sales')
    .where({ active: true })
}

const findById = (saleId) => {
  return knex
    .select(['sales_id', 'order_number', 'sales_date', 'product_quantity',
      'sales_price', 'user_id', 'product_id'])
    .from('sales')
    .where({ active: true })
    .where({ sales_id: saleId }) // Condicion para elegir un dato
}

const findByUser = (userId) => {
  return knex
    .select(['sales_id', 'order_number', 'sales_date', 'product_quantity',
      'sales_price', 'user_id', 'product_id'])
    .from('sales')
    .where({ active: true })
    .where({ user_id: userId }) // Condicion para elegir un dato
}

const findByDate = (dateId) => {
  return knex
    .select(['sales_id', 'order_number', 'sales_date', 'product_quantity',
      'sales_price', 'user_id', 'product_id'])
    .from('sales')
    .where({ active: true })
    .where({ sales_date: dateId }) // Condicion para elegir un dato
}

const findByDateAndUser = (dateId, userId) => {
  return knex
    .select(['sales_id', 'order_number', 'sales_date', 'product_quantity',
      'sales_price', 'user_id', 'product_id'])
    .from('sales')
    .where({ active: true })
    .where({ user_id: userId })
    .where({ sale_id: dateId }) // Condicion para elegir un dato
}

module.exports = {
  create,
  findAll,
  findById,
  findByUser,
  findByDate,
  findByDateAndUser
}
