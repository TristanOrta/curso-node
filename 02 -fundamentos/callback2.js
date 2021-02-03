let empleado = [{
    id: 1,
    nombre: 'oscar'
}, {
    id: 2,
    nombre: 'vianet'
}, {
    id: 3,
    nombre: 'lola'

}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 3000
}];


let getEmpleado = (id, callback) => {

    let empleadoDB = empleado.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB)

    }

}


let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)


    if (!salarioDB) {
        callback(`No existe un salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        })

    }


}

getEmpleado(3, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
});