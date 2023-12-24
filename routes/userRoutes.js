const { Router } = require('express')
const router = Router()
const userController = require('../controllers/userController')

router.post('/users', (userController.createUser))
router.get('/users', (userController.findAllUsers))
router.get('/users/:idUser', (userController.findUserById))
router.patch('/users/:idUser', (userController.updateUser))
router.delete('/users/:idUser', (userController.softDeleteUser))
router.delete('/users/destroy/:idUser', (userController.deleteUser))

module.exports = router
