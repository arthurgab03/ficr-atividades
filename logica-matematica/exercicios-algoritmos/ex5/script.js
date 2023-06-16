let numero = parseInt(prompt("Digite um número para realizar o cálculo do seu fatorial."))
let resultado = 1;

for (let i = 1; i <= numero; i++) {
    resultado *= i;
}

if (isNaN(numero)) {
    alert("O valor digitado não foi um número!")
} else {
    alert(`O fatorial de ${numero}! é: ${resultado}`);
}








