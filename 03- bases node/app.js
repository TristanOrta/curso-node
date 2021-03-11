// requierds
//const fs = require('fs'); //nativos
//const fs = require('express'); // no nativos
//const fs = require('./fs'); //archivos dentro del proyecto
const { crearArchivoTabla } = require('./helpers/multiplicar');



//let base = 11;

console.clear();

const base = 8;

crearArchivoTabla(base);