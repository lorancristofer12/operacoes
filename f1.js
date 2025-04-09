// funções básicas

// 1 função simples sem parâmetros e sem retorno
function saudacao() {
    console.log("Ola, bem vindo ao estudo de funções");
}

// chamar a função
saudacao;

// 2.Função com parâmetros
function cumprimentar(nome) {
    console.log(`ola, ${nome}! como você está?`)
}

// chamar a função com argumento
cumprimentar("felipe");
cumprimentar("wiliam")

// 3. Função com parametros e retorno
function soma (a,b) {
    return a + b;
}

// Usando o vaor retornado pela função
const resultado = soma(5,3);
console.log(`a soma é: ${resultado}`);

// 4. Função com parâmetros padrão (default)
function multiplicar (a, b = 2) {
    return a * b;
}

console.log(multiplicar(4));    // usa o valor padrão
console.log(multiplicar(4,5));  // subscreve o valor padrão

//.5 Declaração de duas variáveis

let nome = "Loran"
let sobrenome = "Cristhoffer"
let nomeCompleto = nome + " " + sobrenome;

console.log("O nome completo é:", nomeCompleto); // nome completo 

// 6. Declaração de função 
function subtrair (a,b) {
    return a - b;
}

// 6.1 Expressão de função
const dividir = function(a,b) {
    if (b === 0); {
        return "Não é possível dividir por zero"
    }
    return a / b;
}

console.log (dividir(10,2));
console.log (dividir(10,0));