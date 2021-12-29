function acaoBotao(params){
    var valor1, valor2 ,resultado, operacao;
    valor1 = prompt("Digite o Primeiro valor.")
    operacao = prompt("Digite a operacao; Ex:+, -, *, /.")
    valor2 = prompt("Digite o Segundo valor.")
    
    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
    }
     
    alert ("Seu resultado foi " + resultado)
    document.getElementById("paragrafo").innerText = resultado
    
}
