// Importar modelo
const modelProducts = require('../models/Products')

const createProduct = (req, res) => {
  modelProducts.create(req.body)
    .then(row => {
      res.status(201).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createProduct
}
