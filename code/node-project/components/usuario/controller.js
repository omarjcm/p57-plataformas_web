const use = require('./network')
const { rejects } = require('assert')

function addUsuario(usuario, nombre, apellido, correo) {
    return new Promise( (resolve, reject) => {
        if (!usuario) {
            console.error('[MensajeControlado] No hay usuario.')
            return reject('No existe usuario.')
        }
        const fullUsuario = {
            usuario: usuario,
            nombre: nombre,
            apellido: apellido,
            correo: correo
        }
        console.log( fullUsuario )
        return resolve( fullUsuario )
    })
}

module.exports = {
    addUsuario,
}