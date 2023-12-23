require('dotenv').config()
//  Importar express
const express = require('express')
// Importar las rutas
const productsRoutes = require('./routes/productRoutes')

const app = express()

//  middlewares

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// RUTAS
app.use('/api/v1', productsRoutes)

/* levantar el servidor */
app.listen(3000, () => {
  console.log('server on: 3000')
})
