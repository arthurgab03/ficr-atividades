const enviar = document.getElementById('enviar');
const audioSus = document.getElementById('suspeito');
const audioAssassino = document.getElementById('assassino');


function investiga() {
    let input1 = parseInt(document.getElementById('fone').value);
    let input2 = parseInt(document.getElementById('local').value);
    let input3 = parseInt(document.getElementById('mora').value);
    let input4 = parseInt(document.getElementById('deve').value);
    let input5 = parseInt(document.getElementById('trabalho').value);
    let nome = document.getElementById('nome').value;
    let resposta = document.getElementById('resposta');

    let total = input1 + input2 + input3 + input4 + input5;

    if(total == 5){
        resposta.innerHTML = nome + " é o assassino!";
        resposta.classList.add('assassino(a)'); 
        audioAssassino.play();
    } else if (total == 3 || total == 4){
        resposta.innerHTML = nome + " é cúmplice!";
        resposta.classList.remove('assassino');
    } else if (total == 2) {
        resposta.innerHTML = nome + " é suspeito(a)!";
        resposta.classList.remove('assassino');
        audioSus.play();
    } else if (total < 2 && total >= 0) {
        resposta.innerHTML = nome + " é inocente!";
        resposta.classList.remove('assassino'); 
    } else {
        resposta.innerHTML = "Insira valores correspondentes com as instruções!"
    }

}

enviar.addEventListener('click', investiga);

// função para o modal 

const abrirModal = document.getElementById('open-modal');
const fecharModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[abrirModal, fecharModal, fade].forEach((e) => {
    e.addEventListener('click', () => toggleModal()) 
})






