// Bora praticar então?

// Desafios
// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos 
// como parâmetro.

let altura = parseFloat(prompt('qual sua altura?').trim());
let peso = parseFloat(prompt('qual seu peso?').trim());
    if(altura<= 0 || peso <= 0){
        console.log("valores invalidos");
        return;
    }
let imc = calculaIMC(altura, peso);

function calculaIMC(altura, peso){
    let imc = peso / (altura * altura);
    return imc;
}

console.log(`seu imc é: ${imc.toFixed(2)}`);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
//by meta:
let n = 5;
function fatorial(n) {
    if (n < 0) {
      return "Não é possível calcular a fatorial de um número negativo";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= n; i++) {
        resultado = resultado * i;
      }
      return resultado;
    }
  }

  console.log(fatorial(n));

// Crie uma função que converte um valor em dólar, passado como parâmetro, 
// e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar 
// igual a R$4,80.

function converterDolarParaReal(valorEmDolar) {
    const cotacaoDolar = 4.80;
    const valorEmReal = valorEmDolar * cotacaoDolar;
    return valorEmReal;
  }
  
  // Exemplo de uso:
  const valorEmDolar = 100;
  const valorEmReal = converterDolarParaReal(valorEmDolar);
  console.log(`O valor de ${valorEmDolar} dólares é equivalente a ${valorEmReal} reais.`);


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
// utilizando altura e largura que serão dadas como parâmetro.
JavaScript
function calcularAreaEPerimetro(altura, largura) {
  const area = altura * largura;
  const perimetro = 2 * (altura + largura);
  
  console.log(`Altura: ${altura}m`);
  console.log(`Largura: ${largura}m`);
  console.log(`Área: ${area}m²`);
  console.log(`Perímetro: ${perimetro}m`);
}

// Exemplo de uso:
calcularAreaEPerimetro(5, 3);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaEPerimetroCirculo(raio) {
    const pi = 3.14;
    const area = pi * (raio ** 2);
    const perimetro = 2 * pi * raio;
    
    console.log(`Raio: ${raio}m`);
    console.log(`Área: ${area.toFixed(2)}m²`);
    console.log(`Perímetro (Circunferência): ${perimetro.toFixed(2)}m`);
  }
  
  // Exemplo de uso:
  calcularAreaEPerimetroCirculo(4);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
JavaScript
function exibirTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Exemplo de uso:
exibirTabuada(5);

// Aprendemos como criar um programa para verificar se o “chute” inserido é igual ao número secreto definido. Utilizamos estruturas condicionais para tomar decisões com base no resultado dessa comparação;

// Criamos uma variável para armazenar a quantidade de tentativas realizadas pelo usuário;

// Vimos a importância de consultar a documentação da linguagem e das bibliotecas utilizadas no desenvolvimento do programa. A documentação é uma fonte valiosa de informações que nos auxilia na compreensão de conceitos e no uso correto das funcionalidades disponíveis.