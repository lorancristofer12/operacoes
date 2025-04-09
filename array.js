// 1. lista de frutas

const frutas = ["Maça", "banana", "uva", "morango", "manga"];
console.log("Primeira fruta: ", frutas[0]);
console.log("Ultima fruta: ", frutas[frutas.length -1]);
console.log("Total de frutas:", frutas.length);

// A função lenght retorna o número de elementos do array

// 2. Encontrando elementos 

const alunos = [
    {nome: "Aline", nota: 7.5},
    {nome: "Samuel", nota: 9.0},
    {nome: "Joana", nota: 6.5 },
    {nome: "Mateus", nota: 8.0},
    {nome: "Marta", nota: 10.0},
];

const alunoNotaAlta = alunos.find(aluno => aluno.nota > 8);
console.log("Primeiro aluno com nota > 8:" ,alunoNotaAlta);

const temNota10 = alunos.some(aluno => aluno.nota === 10);
console.log(" Existe aluno com nota 10?", temNota10);
// variável booleana, onde traz resultados true ou false 

const todosMaiorQue5 = alunos.every(aluno => aluno.nota > 5)
console.log("Todos tem nota > 5?", todosMaiorQue5); //true

// 3. manipulando arrays

const numeros = [];
numeros.push(10,20,30); // adicionar números ao final do array
numeros.unshift(5); //adicionar o número 5 no início
console.log("Array após adições:", numeros) // [5, 10, 20, 30]
numeros.pop(); // remover o último elemento
numeros.shift(); // remover o primeiro elemento 
console.log("Array final:", numeros); // [10, 20]

