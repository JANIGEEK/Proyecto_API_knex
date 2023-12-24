// Importar modelo
const modelUser = require('../models/Users')

const createUser = (req, res) => {
  modelUser.create(req.body)
    .then(row => {
      res.status(201).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findAllUsers = (req, res) => {
  modelUser.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findUserById = (req, res) => {
  modelUser.findById(req.params.idUser)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const updateUser = (req, res) => {
  modelUser.update(req.params.idUser, req.body)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const deleteUser = (req, res) => {
  modelUser.destroy(req.params.idUser)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const softDeleteUser = (req, res) => {
  modelUser.softDestroy(req.params.idUser)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
  softDeleteUser
}
