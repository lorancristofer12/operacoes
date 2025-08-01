// Gerador de senhas

function gerarSenha(tamanho=8, incluirNumeros=true, incluirEpeciais=false) {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (incluirNumeros) {
        caracteres += "0123456789"; 
    }

    if (incluirEpeciais) {
        caracteres += "!@#$%¨&*";
    }

    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        let indiceAleatório = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[indiceAleatório];
    }

    return {
        senha: senha,
        tamanho: senha.length, 
        configuracao: {
            incluiNumeros: incluirNumeros,
            incluiEpeciais: incluirEpeciais
        }
    };

} 

// Gerar diferentes tipo de senha 
console.log("Senha simples: ", gerarSenha(6));
console.log("Senha com números: ", gerarSenha(10, true));
console.log("Senha com números: ", gerarSenha(18, false, true));