// requierds
const fs = require('fs'); //nativos
//const fs = require('express'); // no nativos
//const fs = require('./fs'); //archivos dentro del proyecto




//let base = 11;

console.clear();

const base = 3;
let salida = '';

console.log('=================');
console.log(` Tabla del ${base}`);
console.log('=================');


for (let i = 1; i < 11; i++) {

    salida += ` ${base} * ${i} = ${base * i}\n`;

}

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creado`);
});

console.log(salida);