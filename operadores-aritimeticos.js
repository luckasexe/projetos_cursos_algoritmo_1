/*
Var
 Seção de Declarações das variáveis 
   resultado, valor01, valor02, valor03:real
   

Inicio
 Seção de Comandos, procedimento, funções, operadores, etc... 
   valor01 := 10
   valor02 := 10
   valor03 := 10
   resultado := ((valor01 + valor02 + valor03) / valor03) % 2
   escreval("Resultado: ", resultado)

Fimalgoritmo
*/
var resultado, valor01, valor02, valor03;
valor01 = prompt("Digite o primeiro valor a ser somado")
valor02 = prompt("Digite o segundo valor a ser somado")
valor03 = prompt("Digite o terceiro que sera multiplicado")
resultado = (parseInt(valor01) + parseInt(valor02)) * parseInt(valor03);

alert("Resultado: " + resultado);