function acaoBotao () {
    var numero, fatorial, contador
    numero = prompt("Digite o Numero para calcular o fatorial")
    fatorial = 1
    for (contador = 1; contador <= numero; contador++){
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = fatorial
}