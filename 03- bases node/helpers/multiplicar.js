const fs = require('fs');
const crearArchivoTabla = (base = 9) => {




    console.log('=================');
    console.log(` Tabla del ${base}`);
    console.log('=================');

    let salida = '';

    for (let i = 1; i <= 10; i++) {

        salida += ` ${base} * ${i} = ${base * i}\n`;

    }

    console.log(salida);
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;

    //     console.log(`tabla-${base}.txt creado`);
    // });

    // con writeFileSync el error se gestiona con try catch
    fs.writeFileSync(`tabla-${base}.txt`, salida);



}

module.exports = {
    crearArchivoTabla
}