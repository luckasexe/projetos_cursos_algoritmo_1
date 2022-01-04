function acaoBotao(params){
    var valor1, valor2 ,resultado, operacao;
    valor1 = prompt("Digite o Primeiro valor.")
    operacao = prompt("Digite a operacao; Ex:+, -, *, /.")
    valor2 = prompt("Digite o Segundo valor.")
    
    if ( operacao == "+" ){
        resultado = parseInt(valor1) + parseInt(valor2)
    }else if( operacao == "-" ){
        resultado = parseInt(valor1) - parseInt(valor2)
    }else if( operacao == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
    }else if( operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
    }
    alert ("Seu resultado foi " + resultado)
    document.getElementById("paragrafo").innerText = resultado
    
}
