/*



   escreva("Digite a quantidade de vezes que vai ser verificado a idade: ")
   leia(limite)
   contador := 0
   enquanto contador < limite faca
            escreva("Digite o nome da pessoa: ")
            leia(nome)
            escreva("Digite a idade da pessoa: ")
            leia(idade)
            se idade >= 18 entao
            escreval(nome, " é maior de idade")
            senao
            escreval(nome, " é menor de idade")
            fimse
            contador := contador + 1
   fimenquanto
   */
function acaoBotao () {
    var nome, idade, limite, contador
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
    contador = 0
    while(contador < limite){
        nome = prompt("Digite o nome da pessoa:")
        idade = prompt(`Digite a idade de ${nome}`)
        if (idade >= 18)
             document.getElementById("paragrafo").innerText = nome + " você é MAIOR de IDADE"
        else
             document.getElementById("paragrafo").innerText = nome + " você é MENOR de IDADE"
         contador++  
    }
}

