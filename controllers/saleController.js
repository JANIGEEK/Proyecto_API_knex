// Importar mmodelo

const modelSales = require('../models/Sales')

const createSale = (req, res) => {
  modelSales.create(req.body)
    .then(row => {
      res.status(201).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findAllSales = (req, res) => {
  modelSales.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findSaleById = (req, res) => {
  modelSales.findById(req.params.idSale)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findSalesByUser = (req, res) => {
  modelSales.findByUser(req.params.idUser)
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findSaleByDate = (req, res) => {
  modelSales.findByDate(req.params.date)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findSaleByDateAndUser = (req, res) => {
  modelSales.findById(req.params.date, req.params.idUser)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createSale,
  findAllSales,
  findSaleById,
  findSaleByDate,
  findSaleByDateAndUser,
  findSalesByUser
}
