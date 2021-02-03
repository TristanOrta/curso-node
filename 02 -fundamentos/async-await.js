// let getNombre = async() => {

//     throw new Error('no existe un nombre');

//     return 'Oscar';
// };

//es igual al de a usar async
// let getNombre = () => {

//     return new Promise((resolve,reject)=>{
//      resolve(   'oscar');

// });
// }

//console.log(getNombre());


let getNombre = () => {

    return new Promise((resolve, reject) => {


        setTimeout(() => {
            resolve('oscar');
        }, 3000);

    });
}

let saludo = async() => {

    let nombre = await getNombre();

    return `hola ${nombre}`;
}


saludo().then(mensaje => {
        console.log(mensaje);
    })
    // .catch(e => {
    //     console.log('Error de async', e);
    // })