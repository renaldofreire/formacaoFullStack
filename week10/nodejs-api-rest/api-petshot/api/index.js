const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(5000, () => console.log('A API está funcionando corretamente.'))
