// função que classifica  a temperatura

function classificarTemperatura(temp){
    if (temp <= 0) {
        return "Temperatura negativa (congelante)";
    } else if (temp >= 1 && temp < 15) {
        return "Temperatura baixa (frio)";
    } else if (temp >= 16 && temp < 25) {
        return "Temperatura agradável (OK)";
    }   else if (temp >= 26 && temp < 32) {
        return "Temperatura alta (calorzinho)"; 
    }   else {
        return "Temperatura muito alta (INFERNINHO!!!!)"
    }
}
console.log(classificarTemperatura (0));
console.log(classificarTemperatura (10));
console.log(classificarTemperatura (16));
console.log(classificarTemperatura (31));
console.log(classificarTemperatura (45));

