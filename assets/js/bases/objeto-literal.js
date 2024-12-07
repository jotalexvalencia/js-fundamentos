let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};//? {} objeto que tien llave nombre y valor Tony Stark
console.log ( {personaje} );
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad );
console.log('Coors', personaje.coords);
console.log('Latitud', personaje['coords'].lat);
console.log('No Trajes', personaje.trajes.length);
console.log('último traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('vivo', personaje[x]);
console.log('Última pelicula', personaje['ultima-pelicula']); //? acceso así

//! Más detalles
delete personaje.edad;//! delete -> eliminar propiedad


//! agregar una propiedad
personaje.casado = true;

//! Trabajar el objeto como si fuera un arreglo
const entriesPares =Object.entries( personaje );
console.log( entriesPares );

 //! Object.freeze( personaje ) -> bloquear un objeto para no adicionar, eliminar o editar propiedades
 //! pero no las subpropiedades a menos que bloqueemos como en *
Object.freeze( personaje );
//!Object.freeze (personaje.direccion); -> bloquea la subpropieadd direccion
Object.freeze (personaje.direccion); //! como en *

personaje.dinero = 10000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Dosquebradas, Colombia'; //! subpropiedad
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );//! Object.getOwnPropertyNames( personaje ); -> obtener las propiedades de un objeto
const valores =Object.values( personaje ); //! Object.values( personaje ); -> obtener los valores de un objeto
console.log( {propiedades, valores} );

