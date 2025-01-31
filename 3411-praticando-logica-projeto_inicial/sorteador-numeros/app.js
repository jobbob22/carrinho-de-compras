function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    if(de>ate){
        alert(`O valor inicial (Do número) : ${de} não pode ser maior que o valor final (Até o número) : ${ate}.Quantidade invalida`)
        return;
    }
    if (quantidade >(ate - de +1 )){
        alert("A quantidade de números a serem sorteados não pode ser maior do que o intervalo disponível.");
        return; 
    }
let sorteados = [] ;
let numero ;
for (let i = 0; i < quantidade; i++ ){
numero = ObterNumeroAleatorio(de,ate);
while(sorteados.includes(numero)){
    numero = ObterNumeroAleatorio(de,ate);
}

sorteados.push(numero);


}
  
let resultado = document.getElementById("resultado");
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
alterarStatusBotao();
}

function ObterNumeroAleatorio(min,max){

    return Math.floor(Math.random() * (max - min + 1)) + min ;
    
}

function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar");
   if (botao.classList.contains(`container__botao-desabilitado`)){
    botao.classList.remove(`container__botao-desabilitado`);
    botao.classList.add(`container__botao`);

   }else{
    botao.classList.remove(`container__botao`);
    botao.classList.add(`container__botao-desabilitado`);
   } 
   
}


function reiniciar(){
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

alterarStatusBotao();



}
