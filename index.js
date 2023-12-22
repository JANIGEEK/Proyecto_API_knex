//  Importar express
const express = require('express')

const app = express()

//  middlewares

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* levantar el servidor */
app.listen(3000, () => {
  console.log('server on: 3000')
})
