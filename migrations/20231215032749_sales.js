/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('sales', function (table) {
        table.increments('sales_id').primary()
        table.integer('order_number').notNullable()
        table.timestamp('sales_date').defaultTo(knex.fn.now())
        table.integer('product_quantity').notNullable()
        table.decimal('sales_price', 10, 2).notNullable()
        table.integer('user_id').notNullable().references('users.user_id')
        table.integer('product_id').notNullable().references('products.product_id')
        table.boolean('active').defaultTo(true)
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('sales')
    }
  })
}
