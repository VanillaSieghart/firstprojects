function jogar(){levels = prompt ("Quanto de level você tem?")
if (levels < 18) {
  alert("Você ainda não está pronto!")
}
if (levels >= 18) {
  escolhaJogador = prompt ("Escolha 1espada, 2machado ou 3lança?")
  escolhaComputador = Math.floor (Math.random() * 3) + 1
  
  //Jogador 1espada, computador 1espada -> empate
  //Jogador 2machado, computador 2machado -> empate
  //Jogador 3lança, computador 3 lança -> empate
  if (escolhaJogador == escolhaComputador) {
    alert("Empate de Guerreiros!")
  }
  
  //Jogador 1espada, Computador 2machado -> jogador vence
  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      alert("Guerreiro venceu, Sir Pc escolheu o machado!")
    }
    //jogador 1espada, computador 3lança -> computador vence
    if (escolhaComputador == 3) {
      alert("Sir Pc venceu, escolheu a lança!")
    }
  }
  //Jogador 2machado, computador 3lança -> jogador ganha
  if (escolhaJogador == 2) {
    if (escolhaComputador == 3) {
      alert("Guerreiro venceu, Sir Pc escolheu a lança")
    }
    if (escolhaComputador == 1) {
      alert("Sir Pc venceu, escolheu a espada!")
    }
  }
  //Jogador 3lança, computador 1espada -> jogador vence
  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      alert("Guerreiro vence, Sir Pc escolheu a espada")
    }
    if (escolhaComputador == 2) {
      alert("Sir Pc venceu, escolheu o machado")
    }
  }
 

  alert("Escolha do Sir Pc foi " + escolhaComputador)
  }
} 