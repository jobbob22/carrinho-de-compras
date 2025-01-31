
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$0,00';
function adicionar(){
//recuperar os valores - nome do produto, quantidade e valor

    let produto = document.getElementById("produto").value ;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById("quantidade").value ;
    //calcular opreço, onosso subtotal
    let preco = quantidade*valorUnitario ;
   //adicionar no carrinho 

   let carrinho = document.getElementById('lista-produtos');
   carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto}Celular <span class="texto-azul">R$${preco}</span>
        </section>`;
        
     document.getElementById("quantidade").value = "";
//atualizar o valor total
    
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$${totalGeral}`;
}

function limpar()

{
    totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$0,00';

}

