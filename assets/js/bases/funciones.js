
function saludar( nombre ) {
    console.log( arguments ); //! solo lo tienen funciones tradicionales
    console.log( 'Hola ' + nombre );
    //return 1;
}

const saludar2 = function( nombre ){
    console.log( 'Hola función constante ' + nombre );
}

const saludarFlecha = () =>{
    console.log( 'Hola Función Flecha' );
}

const saludarFlecha2 = ( nombre ) =>{
    console.log( 'Hola Función Flecha' + nombre );
}

const saludarFlecha3 = nombre =>{
    console.log( 'Hola Función Flecha sin paréntesis: ' + nombre );
}

const retornoDeSaludar = saludar( 'Alex', 47, false, 'Colombia'  ); //* retorna Hola Alex
console.log( {retornoDeSaludar} );

function sumar( a, b ){
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b;
}

//? cuando es una sola linea puedo hacer la función de flecha así
const multiplicar = (a, b) => a * b;

console.log( sumar(1,2) );

function getAleatorio() {
    return Math.random();
}

//? En una función de flecha que no tenga llaves
//? la función se va a llamar getAleatorio2()

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );

console.log( multiplicar(50,29) );