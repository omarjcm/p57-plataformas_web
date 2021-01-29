const list = []

function addUsuario( usuario ) {
    list.push( usuario )
}

function getUsuarios() {
    return list
}

module.exports = {
    add: addUsuario,
    list: getUsuarios,
}