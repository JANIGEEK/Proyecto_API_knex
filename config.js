/* Dependiendo de la variable de entorno del sistema
va a usar una configutacion u otra
*/

const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile')
const knex = require('knex')

// Llamar a la configuracion de knexfile
module.exports = knex(knexfile[env])
