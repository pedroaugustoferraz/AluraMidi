// função nome da função (parametro enviado onde foi chamado)
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
            elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

// 'const' atribui um valor constante a alguma variavel
const listaDeTeclas = document.querySelectorAll('.tecla');

let i=0;


for (i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`    // template string, poder variar uma string

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(evento){
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}

// ".classList" = vai puxar as classes que tal elemento tem
// ".classList.add" = adiciona uma classe a lista de classes
// ".classList.remove" = remove uma classe a lista de classes
// const = inicializa um valor q n varia
// let = inicializa uma variável











// while(i < listaDeTeclas.length){

//     const tecla = listaDeTeclas[i];
//     const instrumento = tecla.classList[1];
    
//     // template string, poder variar uma string
//     const idAudio = `#som_${instrumento}`

//     tecla.onclick = function(){
//         tocaSom(idAudio);
//     }
//     i++;
// }
