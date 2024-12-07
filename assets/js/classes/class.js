


class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {

        if (!nombre) throw Error('Necesitamos el nombre');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++;
    }

    set setComidaFavorita (comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita (){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice ${this.frase}`)
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
// const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// console.log(ironman);
spiderman.miFrase();
// ironman.miFrase();
spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// console.log(spiderman.getComidaFavorita)
// console.log(spiderman);
// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();