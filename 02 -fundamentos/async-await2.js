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

let getEmpleado = async(id) => {


    let empleadoDB = empleado.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;

    }

}

let getSalario = async(empleado) => {


    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        throw new Error(`el empleado ${empleado.nombre} no tiene sueldo`)
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });

    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    // console.log(resp);

    return `${resp.nombre} tiene un salario de ${resp.salario}`;

}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));