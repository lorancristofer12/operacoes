// Calculando a media de 2 notas

function CalcularMedia(nota1,nota2) {
    var media = (nota1 + nota2) / 2;
    if(media >= 7) {
        console.log ("Aluno foi aprovado a media:" + media);
    }else {
        console.log("Aluno foi reprovado com a media:" + media);
    }
}

CalcularMedia(4,6) // resultado acima
CalcularMedia(10,6) //resultado abaixo