// Modelo de ususarios
const knex = require('../config')

const create = (bodyUser) => {
  return knex
    .insert(bodyUser)
    .into('users')
    .returning('*')
}

const findAll = () => {
  return knex
    .select(['user_id', 'first_name', 'last_name', 'email', 'phone', 'address',
      'postal_code', 'suburb', 'city', 'created_at'])
    .from('users')
    .where({ active: true })
}

const findById = (userId) => {
  return knex
    .select(['user_id', 'first_name', 'last_name', 'email', 'phone', 'address',
      'postal_code', 'suburb', 'city', 'created_at'])
    .from('users')
    .where({ active: true })
    .where({ user_id: userId })
}

const update = (userId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('users')
    .where({ user_id: userId })
    .returning('*')
}

const destroy = (userId) => {
  return knex
    .del()
    .from('users')
    .where({ user_id: userId })
}

const softDestroy = (userId) => {
  return knex
    .update({ active: false })
    .from('users')
    .where({ user_id: userId })
}

module.exports = {
  create,
  findAll,
  findById,
  update,
  destroy,
  softDestroy
}
