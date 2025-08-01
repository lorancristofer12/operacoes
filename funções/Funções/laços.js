// 1. for loop cortando de 1 a 10 
//console.log("Exemplo básico for loop");
//for (let i = 1; i <= 10; i++) {
    //console.log(`Número: ${i}`);
//}

// 2. while loop - calculando fatorial 
// console.log("Exemplo fatorial");
// let numero = 5;
// let fatorial = 1;
// let contador = 1;

// while (contador <= numero) {
//     fatorial *= contador;
//     console.log(`${contador}! = ${fatorial}`);
//     contador++;
    
// }

// 3. for...of loop
console.log("Exemplo com array");
const frutas = ['maçã', 'uva', 'manga', 'ameixa', 'pessego'];
const preco = [2.50, 1.80, 3.00, 4.50, 2.20];

for (const fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}

console.log("Frutas com preço: ");
frutas.forEach((fruta, index) =>{
    console.log(`${fruta}: R$ ${preco[index].toFixed(2)}`);
});

