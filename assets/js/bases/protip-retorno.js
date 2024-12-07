// function crearPersona( nombre, apellido ){
//     return { nombre, apellido }
// }

const  crearPersona = ( nombre, apellido ) =>  ({nombre, apellido}); //! se debe retornar en parentesis -> ( nombre, apellido ) =>  ({nombre, apellido});


// const persona = crearPersona('Alexander', 'Valencia');
console.log(crearPersona('Alba', 'De Valencia'));

function imprimeArgumentos() {
    console.log(arguments); //! arguments es solo para funciones tradicionales no para las funciones de flecha
}
//! operador ...rest -> resto
const imprimeArgumentos2 = (edad,...args)=> {//! no puede ir otro argumento despúes de ...args en este caso
    // console.log({edad,args}); //! ojo la función de flecha no tiene argumentos
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });
//! operador ...spread -> expande
console.log('Impime argumentos 2: '+imprimeArgumentos2(10,...[true,false,'Alex','Valencia','Hola mundo de junior', 'y mucho mas']));

const  { apellido: nuevoApellido } = crearPersona('Alba', 'Valencia');
console.log({ nuevoApellido });

const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],    
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades ( tony );

//! Aunque ambos operadores utilizan los tres puntos ( ... ), tienen diferentes propósitos y se utilizan en diferentes contextos. 🤔

//!1️⃣ Spread Operator

//!📤 expande MasNumeros y nuevaPersona

//!- Ejemplo con array:
let numeros = [1, 2, 3];
let masNumeros = [...numeros, 4, 5,6,7,8,9,10];
console.log('Spread array: '+masNumeros);

//!- Ejemplo con objeto:
let persona = {nombre: 'Juan', edad: 25};
let nuevaPersona = {...persona, ciudad: 'Madrid', celular: 3128294380};
console.log('Spread objeto: ', nuevaPersona);


//! 2️⃣ Rest Operator

//!📥 “Empaqueta” en una variable el resto de elementos de un array o propiedades de un objeto.

//!- Ejemplo con array:
let [a, b, ...resto1] = [1, 2, 3, 4, 5];
console.log('rest array: ',resto1); //! salida [3, 4, 5]

//!- Ejemplo con objeto:
let {name, ...resto2} = {name: 'Juan', lastName:'Valencia', wife:'Diana', age: 42, job:'dispapeles'};
console.log('rest objeto: ',resto2); //! salida {lastName: 'Valencia', wife: 'Diana', age: 42, job: 'dispapeles'}

//! El código define una función llamada sumar 
//! que toma un número indeterminado de argumentos utilizando el operador rest (...numbers). 
//! Dentro de la función, utiliza el método reduce para sumar todos los números del array numbers, 
//! comenzando desde un acumulador inicial de 0. Finalmente, devuelve la suma total. Al llamar a sumar(1,2,3,4,5,6), 
//! imprime la suma de estos números, que es 21.


const sumar = (...numbers) => {
    const resultado= numbers.reduce((total, num) => total += num, 0);
    return resultado;
}

console.log(sumar(1,2,3,4,5,6));

//! total es el acumulador, que comienza con el valor inicial 0 (el segundo argumento de reduce).
//! num es cada elemento del array mientras se recorre.
//! Durante cada iteración, total se actualiza sumándole el valor de num.
//! De esta forma, al finalizar el recorrido, reduce devuelve el valor acumulado, que en este caso es la suma de todos los números.

// const promedio = (...numeros) => {
//     const respuesta = numeros.reduce((acumulador, elemento, indice, array) => 
//     {
//         if(!isNaN(elemento) && array.length > 0) 
//         acumulador += elemento;
//         if (indice === array.length - 1) {
//             return acumulador / array.length;
//         }
//         return acumulador;
//     }
//         , 0 );
//     return respuesta;
    
// }

// console.log(promedio(1,2,3,4,5,6));

const promedio = (...numeros) => {
    //! Filtrar los valores no numéricos (excluye NaN y otros valores no válidos)
    const valoresValidos = numeros.filter(num => !isNaN(num));

    //! Usar reduce para sumar los números válidos
    const suma = valoresValidos.reduce((acumulador, num) => acumulador + num, 0);

    //! Calcular el promedio: suma / cantidad de valores válidos
    return valoresValidos.length > 0 ? suma / valoresValidos.length : 0;
};

console.log(promedio(1, 2, 3, 4, 5, 6)); //* Resultado: 3.5
console.log(promedio(1, "a", 2, NaN, 3)); //? Resultado: 2 (solo promedia los números válidos)
console.log(promedio()); //! Resultado: 0 (si no hay números, el promedio es 0)



