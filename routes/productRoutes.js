const { Router } = require('express')
const router = Router()
const productController = require('../controllers/productController')

// router.get('/products', productController.getUsers)
// router.get('/products/:id', productController.getUserById)
router.post('/products', (productController.createProduct))
// router.delete('/products/:id', productController.deleteUser)
// router.put('/products/:id', productController.updateUser)

module.exports = router
