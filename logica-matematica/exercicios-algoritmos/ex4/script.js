let contador = 1;

let numeros = [];

do {
let numero = prompt(`Insira um número. Número ${contador} de 10.`);
numeros.push(numero);
contador = contador +  1;
} while (contador <= 10) 
    
alert(`A lista de números digitada foi: ${numeros}`);