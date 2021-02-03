let deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',

    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

// se le cambia el nombre a la variable nombre pero sigue siendo la misma 
let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);