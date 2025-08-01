// Valida email

function ValidarEmail(email) {
    if (!email.includes('@') || !email.includes('.')) {
        return {
            valido:false,
            mensagem: " Email deve conter o @ e pelo menos um ponto. "
        };
    }

    // Verificar se o @ vem antes do ponto 
    let posicaoArroba = email.indexOf ('@');
    let posicaoPonto = email.lastIndexOf('.');

    if(posicaoArroba >= posicaoPonto){
        return {
            valido:false,
            mensagem: "Formato de email inválido"
        };
    }

    return {
        valido:true, 
        mensagem: "Email válido"
    };

}

console.log(ValidarEmail("lorancristhoffer@guaira.com"));
console.log(ValidarEmail("usuario"));
console.log(ValidarEmail("usuario@gmail.com"));

