const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )
app.use( router )

router.get('/mensaje', function(req, res) {
    console.log( req.headers )
    res.header({
        "custom-header":"Nuestro valor personalizado."
    })
    res.send('Lista de mensajes.')
})
router.post('/', function(req, res) {
    res.send('Hola desde POST.')
})
router.delete('/mensaje', function(req, res) {
    console.log( req.query )
    console.log( req.body )
    res.send( 'Mensaje eliminado correctamente. ' + req.body.text )
})

app.listen(5000)
console.log(`La aplicación está escuchando en http://localhost:5000`)