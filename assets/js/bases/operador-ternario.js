/* *
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

//* Entra a un sitio web, para consultar si está abierto hoy...
const dia = 6; //* 0: domingo...
const horaActual = 8;

let horaApertura;
let mensaje; //? Está abierto, Está cerrado, hoy abrimos a las XX

//? if( dia ===0 || dia ===6 ) {
/* if ( [0,6].includes(dia)) { //? regresa true si el dia existe dentro de los 2 valores
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de semana');
    horaApertura = 11;
} */

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

/* if( horaActual >= horaApertura ) {
    mensaje = 'Está abierto';
} else {
     mensaje = 'Está cerrado, hoy abrimos a las ' + horaApertura; ASÍ NO
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`; //? símbolos back tick ``
} */

mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;
console.log({ horaApertura, mensaje });