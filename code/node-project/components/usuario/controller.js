const use = require('./network')
const storage = require('./storage')

function addUsuario(usuario, clave, nombre, apellido, correo, fecha_nacimiento) {
    return new Promise( (resolve, reject) => {
        if (!usuario) {
            console.error('[MensajeControlado] No hay usuario.')
            return reject('No existe usuario.')
        }
        // Se crea un objeto usuario
        const fullUsuario = {
            usuario: usuario,
            clave: clave,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            fecha_creacion: new Date(),
            fecha_nacimiento: fecha_nacimiento,
        }
        console.log( fullUsuario )
        storage.add( fullUsuario )
        return resolve( fullUsuario )
    })
}

function getUsuarios() {
    return new Promise((resolve, reject) => {
        resolve( storage.list() )
    })
}

module.exports = {
    addUsuario,
    getUsuarios,
}