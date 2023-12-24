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

const findAllProducts = (req, res) => {
  modelProducts.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findProductById = (req, res) => {
  modelProducts.findById(req.params.idProduct)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const updateProduct = (req, res) => {
  modelProducts.update(req.params.idProduct, req.body)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const deleteProduct = (req, res) => {
  modelProducts.destroy(req.params.idProduct)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const softDeleteProduct = (req, res) => {
  modelProducts.softDestroy(req.params.idProduct)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createProduct,
  findAllProducts,
  findProductById,
  updateProduct,
  deleteProduct,
  softDeleteProduct
}
