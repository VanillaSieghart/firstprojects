//criar uma lista com cada time
standUsers = ["", "", ""]
viloes = ["","", ""]

forcaStandUsers = 0
forcaViloes = 0 
alert ("O Array agr tem:" + standUsers)
for(let i=0; i<3; i++){
  escolhaStand = prompt("Digite o nome do seu Stand: " + (i + 1))
  standUsers[i] = escolhaStand
  //calcular a força dos usarios de stand
  //forcaStandUsers = forcaStandUsersm + Math.floor(Math.random() * 10) + 1
  forcaStandUsers += Math.floor(Math.random() * 10) + 1
}
console.log("agr o array Standuser contem: " + standUsers)
console.log("Viloes: " + viloes)
for(let i=0; i<3; i++){
  indiceAleatorio = Math.floor(Math.random() * 5)
  viloesPossiveis = ["Yoshikage Kira", "Dio Brando", "Enrico Pucci", "Kars", "Diavolo"]
  viloes[i] = viloesPossiveis[indiceAleatorio]
  //calcular a forca dos viloes
  forcaViloes += Math.floor(Math.random() * 10) + 1
}
console.log("final viloes " + viloes)

//comparar os dois times pra ver quem que que venceu.
if(forcaStandUsers > forcaViloes){
  alert("Stands mais fortes que os vilões! Você ganhou! Sua força foi: " + forcaStandUsers)
}
else{
  if (forcaStandUsers < forcaViloes){
    alert("Vilões sempre vencem! Você perdeu! a força deles foi: " + forcaViloes)
  }
 else{
   alert("Empate! Pronto para uma nova batalha?")
 }
}