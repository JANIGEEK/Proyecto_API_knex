const { Router } = require('express')
const router = Router()
const productController = require('../controllers/productController')

router.get('/products', (productController.findAllProducts))
router.get('/products/:idProduct', (productController.findProductById))
router.post('/products', (productController.createProduct))
router.delete('/products/destroy/:idProduct', (productController.deleteProduct)) // Ruta para borrar en definitiva
router.delete('/products/:idProduct', (productController.softDeleteProduct)) // Ruta para eliminar registros
router.patch('/products/:idProduct', (productController.updateProduct))

module.exports = router
