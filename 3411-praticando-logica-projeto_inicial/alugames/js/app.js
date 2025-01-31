    function alterarStatus(gameId)
    
    {
        let item = document.getElementById(`game-${gameId}`);
        let imagem = item.querySelector(`.dashboard__item__img`);
        let botao = item.querySelector(`.dashboard__item__button`);
        
       if(imagem.classList.contains(`dashboard__item__img--rented`)){
                      
           let resposta = prompt("Deseja realmente devolver o jogo? Digite 'sim' ou 'não'").toLowerCase();

           if(resposta === "sim"){

            imagem.classList.remove(`dashboard__item__img--rented`);
            botao.classList.remove(`dashboard__item__button--return`);
            botao.textContent=`Alugar`;

           }else if (resposta ==="não"){

            alert("Devolução cancelada")
            
           }else{
            alert("Resposta inválida. Por favor, digite 'sim' ou 'não'.");
           }
            
            //imagem.classList.add(`dashboard__item__img`)
        }else{
            
           // imagem.classList.remove(`dashboard__item__img`);
           
           imagem.classList.add(`dashboard__item__img--rented`);
           botao.classList.add(`dashboard__item__button--return`);
           botao.textContent=`Devolver`
           imprimirJogosALugados();

        }

    }

    function imprimirJogosALugados(){

        let jogosAlugados = document.querySelectorAll(`.dashboard__item__img--rented`);
        console.log(`Total de jogos alugados: ${jogosAlugados.length}`);
    }

   
   alterarStatus();
  