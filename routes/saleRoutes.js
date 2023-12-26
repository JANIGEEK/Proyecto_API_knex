const { Router } = require('express')
const router = Router()
const saleController = require('../controllers/saleController')

router.post('/sales', (saleController.createSale))
router.get('/sales', (saleController.findAllSales))
router.get('/sales/date=:date', (saleController.findSaleByDate))
router.get('/sales/date=:date/user=:idUser', (saleController.findSaleByDateAndUser)) // Corregir fallo en busqueda por fecha
router.get('/sales/sale=:idSale', (saleController.findSaleById))
router.get('/sales/user=:idUser', (saleController.findSalesByUser))

module.exports = router
