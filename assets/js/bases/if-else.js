let a = 5;

if ( a >= 10 ) { //! undefined, null, una asignación
    console.log( 'A es mayor o igual a 10' );
} else {
    console.log( 'A es menor que 10' );
}

//* console.log( 'Fin de programa' );

const hoy = new Date();
// console.log( hoy );
let dia = hoy.getDay(); //? 0: Domingo 1: Lunes 2: Martes 3: Miercoles 4: Jueves 5: Viernes 6: Sábado 
console.log({ dia });
//? 1 igual -> = asignación 
//? 2 iguales -> == compara valor 
//? 3 iguales -> === compara valor y tipo 
//? (es decir no es lo mismo '5' a 5 uno es cadena y otro es número)
if ( dia === 0 ) {
    console.log( 'Es Domingo' );
}  else if ( dia === 1 ) {
    console.log( 'Lunes' );
    // if ( dia === 1 )
    // {
    //     console.log('Lunes');
    // } else  {
    //     console.log( 'No es Lunes ni Domingo' );
    // }
} else if ( dia === 2 ) {
    console.log( 'Martes' );
} else {
    console.log( 'No es Lunes, Martes o Domingo' );
}
//* tarea Sin usar If Else, o Switch, únicamente objetos 
dia = 0;

const diaLetras = {
0: 'Domingo',
1: 'Lunes',
2: 'Martes',
3: 'Miércoles',
4: 'Jueves',
5: 'Viernes',
6: 'Sábado'
}

console.log(`con objetos: ${diaLetras[dia]||`día no definido en objeto`}`); //? || operador or

const diaLetras2 = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
//?día de la semana 

console.log(`con arreglos: ${diaLetras2[dia]||`día no definido en arreglo`}`); //? || operador or