const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Bienvenido a la API Meteorologica')
})

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port)
})