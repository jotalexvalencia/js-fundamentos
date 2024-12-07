const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;
// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

console.warn('While');
//? son considerados falso
//! undefined
//* null
//? false

while (carros[i]) {
    if (i === 1) {
        //break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}
i = 0;
n = 0;
while (i < 5) {
i++;
if (i == 3) {
continue;
}
n += i;
console.log(n);
}

console.warn('Do While');
let j = 10; //? siempre va a entrar a esta condición 
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);


