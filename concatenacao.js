/*
escreval("Digite o nome.")
   leia(nome)
   escreval("Digite a idade.")
   leia(numero)
   
   escreval(nome, " tem", numero, " anos")
   */

   var nome, idade;

nome=prompt("Digite seu nome")
idade=prompt("Digite sua idade")
alert("Voce se chama " + nome + " e tem " + idade + "anos.")
document.getElementById("paragrafo").innerText = nome + " : " + idade