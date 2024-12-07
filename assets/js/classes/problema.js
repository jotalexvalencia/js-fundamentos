const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// fher.imprimir();
// Esto se debe crear con la palabra new
function Persona (nombre, edad = 10) {
    console.log('se ejecutó está línea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria',18);
const melissa = new Persona('Melissa',35);
console.log(maria);
maria.imprimir();
melissa.imprimir();