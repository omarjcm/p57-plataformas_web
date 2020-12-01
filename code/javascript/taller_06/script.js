var investigador_01 = {
    nombre: 'Abdón',
    apellido: 'Calderón',
    afiliacion: 'Universidad Politécnica de Madrid',
    correo_electronico: 'acalderon@upm.edu.es',
    edad: 22,
}

var investigador_02 = {
    nombre: 'Angie',
    apellido: 'Lara',
    afiliacion: 'Universidad de Saarland',
    correo_electronico: 'alara@saarland.edu.ge',
    edad: 22,
}

function imprimirNombreMayusculas(objeto) {
    console.log( `${objeto.nombre.toUpperCase()} ${objeto.apellido}` )
}

imprimirNombreMayusculas( investigador_01 )
imprimirNombreMayusculas( investigador_02 )

