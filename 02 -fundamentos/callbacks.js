// setTimeout(() => {
//     console.log('hola mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'oscar',
        id
    }

    if (id == 20) {
        callback(`El usuario con el id ${id}, no existe en la bd`);

    } else {

        callback(null, usuario);
    }
}



getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);

    }

    console.log('usuario de bases de datos', usuario);

});