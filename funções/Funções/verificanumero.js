// (Função que verifica se um número é par ou impar)

function verificaParImpar(numero) {
    if(numero %2 ===0) {
        return numero + " O número é par" ;
    } else {
        return numero + " O número é impar";
    }
}

console.log(verificaParImpar(4));
console.log(verificaParImpar(9));