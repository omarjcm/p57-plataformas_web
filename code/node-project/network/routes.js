const express = require('express')
const { route } = require('../components/usuario/network')
const usuario = require('../components/usuario/network')

const routes = function( server ) {
    server.use('/usuario', usuario)
}

module.exports = routes