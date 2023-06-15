let mes = prompt("Digite um número entre 1 e 12 e eu vou lhe dizer a qual mês o número pertence.");

if (mes == 1) {
    alert('Janeiro')
} else if (mes == 2) {
    alert('Fevereiro');
} else if (mes == 3) {
    alert('Março');
} else if (mes == 4) {
    alert('Abril');
} else if (mes == 5) {
    alert('Maio');
} else if (mes == 6) {
    alert('Junho');
} else if (mes == 7) {
    alert('Julho');
} else if (mes == 8) {
    alert('Agosto');
} else if (mes == 9) {
    alert('Setembro');
} else if (mes == 10) {
    alert('Outubro');
} else if (mes == 11) {
    alert('Novembro');
} else if (mes == 12) {
    alert('Dezembro');
}  else if (mes < 1 || mes > 12) {
    alert('Não existe um mês com esse número!');
} 