const pe = 0.07;
const sp = 12 / 100;
const rj = 15 / 100;
const pb = 8 / 100;


let valor = parseFloat(prompt("Olá, insira o valor do produto que você deseja vender."));
if (valor > 0) {
    let estado = prompt("Para qual estado você deseja enviar? Insira de acordo com a legenda:\nPE: 7%\nSP: 12%\nRJ: 15%\nPB: 8%.");
    if (estado == "PE") {
        var total = alert(`O valor total do seu pedido acrescido com a taxa de juros do estado é: R$ ${(valor - ((pe * valor))).toFixed(2)}`);
    } else if (estado == "SP") {
        var total = alert(`O valor total do seu pedido acrescido com a taxa de juros do estado é: R$ ${(valor - ((sp * valor))).toFixed(2)}`);
    } else if (estado == "RJ") {
        var total = alert(`O valor total do seu pedido acrescido com a taxa de juros do estado é: R$ ${(valor - ((rj * valor))).toFixed(2)}`);
    } else if (estado == "PB") {
        var total = alert(`O valor total do seu pedido acrescido com a taxa de juros do estado é: R$ ${(valor - ((pb * valor))).toFixed(2)}`);
    }
} else if (valor <= 0) {
    alert('Valor inválido!');

}