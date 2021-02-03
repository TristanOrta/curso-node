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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleado.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);

        }


    });
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`el empleado ${empleado.nombre} no tiene sueldo`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });

        }


    });
}

getEmpleado(4).then(empleado => {
            // console.log('empleado de  Bd', empleado);

            return getSalario(empleado);


            // getSalario(empleado).then(resp => {
            //     console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
            // }, err => console.log(err));

        }
        //, (err) => console.log(err)
    )
    .then(resp => {
        console.log(`el salario de ${resp.nombre} es de ${resp.salario}`);
    })
    .catch(err => console.log(err));