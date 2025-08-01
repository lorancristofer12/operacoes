console.log("🎮=== SISTEMA DE PONTUAÇÃO DE JOGO ==== 🎮")

let pontuacao = 0;
let nivel = 1;
let vidas = 3;
let rodada;
let pontosRodada;

// Simulando  as 8 rodadas do jogo

for (let rodada = 1; rodada <= 8; rodada++ ); {
    let pontosRodada = Math.floor(Math.random() * 101);
}

console.log(`\n--- RODADA ${rodada}---`);
console.log(`Pontos obitidos: ${pontosRodada}`)

// continuação da aula
// adicionando pontos a pontuação total

pontuacao += pontosRodada;
if (pontosRodada >= 80) {
    console.log("🌟EXECELRNTE! Bônus de 20 pontos")
    pontuacao +=20;
}   else if (pontuacao >= 60 ) {
    console.log("⭐ BOM! Bônus de 10 pontos");
    pontuacao += 10;
}   else if (pontuacao  < 30) {
    console.log("😔 RUIM! Perdeu um 1 vida");
    vidas--;
    if (vidas <= 0) {
        console.log("💀GAME OVER! Suas vidas acabaram!");
        break;
    }
}

//Sistema de progressão de nível
if (pontuacao >=  nivel * 150) {
    nivel ++;
    console.log(`🚀SUBIU DE NIVÉL! Agora você está no nível🚀${nivel} `);
    console.log("❤️Vida exxtra ganha!❤️");
    vidas ++;
}

//Exibindo status atual
console.log(`Pontuação total: ${pontuacao}`);
console.log(`Nível Atual: ${nivel}`);
console.log(`Vidas restantes: ${vidas}`);

// Pausa entre as rodadas
console.log("⏳Preparando a próxima rodada...\n");

// 01/08/2025 🔽
// Relatório final do jogo 
console.log("\n" + "=" .repeat(40));
console.log("RELATÓRIO FINAL DO JOGO");
console.log( "=".repeat(40));
console.log(`🏆Pontuação Final:${pontuacao}pontos`);
console.log(`🚩Nível Alcançado :${nivel}`);
console.log(`❤️Vidas Restantes :${vidas}`);

// Sistema Classificação
let classificacao
if(pontuacao >= 600 ) {
    classificacao = "🥇 1° LUGAR! "
} else if (pontuacao >= 450) {
    classificacao = "🥈 2º LUGAR!"
} else if (pontuacao >= 300) { 
    classificacao = "🥉 3° LUGAR!"
} else if (pontuacao >= 150) {
    classificacao = "🏅 NOVATO!";
} else {
    classificacao = "🦆 INICIANTE!";
}
console.log(`🏅clasificação: ${classificacao}`);



