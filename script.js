/////////////////////////////////////////////////////////
//---------------------mario-----------------------------
/////////////////////////////////////////////////////////

//criando variaveis para encontrar as classes
let mario = document.querySelector('.mario')//encontra mario
let cano = document.querySelector('.cano')//encontra cano
let nuvem = document.querySelector('.nuven')//encontra nuvem
let telafim = document.querySelector('.fim')//encontra a tela game over
let botaoReiniciar = document.querySelector('.reiniciar')// encontra o botão

console.log('===PARADA 01===');
console.log('Mario:' , mario)
console.log('cano:' , cano);
console.log('nuvem:' , nuvem);
console.log('Tela de Fim' , telafim);
console.log('botão:' , botaoReiniciar);

function jump(){
    mario.classList.add('pular')

    setTimeout(function(){
        mario.classList.remove('pular')
    } , 500)    
}

document.addEventListener('click' , function(){
    console.log('tecla perssonalizada! chamando função jump()')
     
    //Qual function chamar?
    jump()

})

document.addEventListener('keydown' , function(){
    console.log('tecla perssonalizada! chamando função jump()')
     
    //Qual function chamar?
    jump()

})

console.log("iniciando loop");
console.log("colisão");

//getComputeStyle = pega o estilo atual do elemento
// replace tira o 'px' do valor e o na frente transforma em número
//---> +window.getComputedStyle(mario)
//---> Pergunta ao navegador: "Qual é a posição atual do Mario na tela"
//---> .bottom
//---> Pega a distância do Mario (em pixels)
//---> .replace
//---> Tira o px, deixando só o numero: "120"
//---> Transformar o texto "120" no numero 120, para o js fazer as contas

let loopDojogo = setInterval(function(){
    //offseLeft: Distancia do elemento até a borda esquerda da tela
    let posicaoCano = cano.offseLeft

    //getComputedStyle : pega o estilo atual do elemento
    //replace tira o 'px' do valor e o + na frente transforma em numero
    //window seleciona todo o estilo da tela, tudo que está na tela
    let posicaoMario= +window.getComputedStyle(mario).bottom.replace('px' , '');

    
})
