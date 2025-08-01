// verificando idade 
function verificaridade (idade) {
    if (idade >= 18) {
        return "Maior de idade";
    }else {
        return "Menor de idade"
    }
}

console.log(verificaridade(20));
console.log(verificaridade(16));
console.log(verificaridade(18));