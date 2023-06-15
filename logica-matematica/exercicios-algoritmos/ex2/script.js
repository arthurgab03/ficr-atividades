let idade = prompt("Digite sua idade");
let tempoTrabalho = prompt("Digite o tempo que você trabalhou");

if(idade >= 65 || tempoTrabalho >= 30 || idade >= 60 && tempoTrabalho >= 25){
    alert(`Você tem ${idade} anos e trabalhou por ${tempoTrabalho} anos, você pode se aposentar!`);
} else {
    alert('Não pode se aposentar.');
}