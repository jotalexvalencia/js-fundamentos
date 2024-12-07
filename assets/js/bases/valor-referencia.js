//! todos los primitivos se pasan por valor
//! todos los objetos se pasan por referencia
//* ... como argumento parametro rest ej: const cambiaNombre = ( ...persona )
//* y cuando es asignación como en ana ej: let ana = { ...juan };
//* ... spread rompe referencia que es acceder a la memoria

//? pasamos por valor
let a = 10;
let b = a;
a = 30;
console.log({ a,b });

//? pasamos por referencia
let juan = { nombre: 'Juan' };
let ana = { ...juan };
ana.nombre = 'Ana';
console.log({ juan,ana }); //? cambio el valor de Juan porque en JScript todos los objetos son pasados por referencia

const cambiaNombre = ( {...persona} ) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });

//* Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
//?- const otrasFrutas = [...frutas]; //? forma que recomienda Fernando

console.time('slice');
const otrasFrutas = frutas.slice(); //? otra forma
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas]; //? otra forma
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });