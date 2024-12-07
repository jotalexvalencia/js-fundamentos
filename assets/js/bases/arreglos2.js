let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length); //! length -> cuantos elementos hay dentro del arreglo

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach( (elemento, indice, arr) => {
    console.log( {elemento, indice , arr} );
} );

let nuevaLongitud = juegos.push( 'F-Zero' ); //? push -> agrega un nuevo elemento al final del array y retorna el nuevo length del array

console.log( {nuevaLongitud, juegos } );

nuevaLongitud = juegos.unshift('Fire Emblem'); //* unshift -> agrega un nuevo elemento al principio del array y retorna el nuevo length del array
console.log( {nuevaLongitud, juegos } );

let juegoBorrado = juegos.pop(); //! pop -> remueve el último elemento del array y lo retorna en este momento F-Zero
console.log( {juegoBorrado, juegos } );

let pos = 1;
console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2); //? splice -> remueve elementos de un array a partir de la posición(pos=1) cuantos (2) y retorna el array
console.log( {juegosBorrados, juegos } );

let metroidIndex = juegos.indexOf('Metroid'); //* indexof -> retorna el índice de la primera ocurrencia del elemento que se le pasa
console.log( {metroidIndex} ); //* si regresa -1 es que no encontró lo buscado