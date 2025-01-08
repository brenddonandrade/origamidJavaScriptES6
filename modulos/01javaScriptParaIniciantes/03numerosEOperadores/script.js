// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log('Minha especulação é 35.');
console.log(`Resultado é ${total}`);

// Crie duas expressões que retornem NaN
var peso = '89kg';
var metadePeso = peso / 2;
console.log(peso, metadePeso);

// Somar a string '200' com o número 50 e retornar 250
var resultado = '200' + 50;
console.log(resultado);
resultado = 50 + '200';
console.log(resultado);

// Incremente o número 5 e retorne o seu valor incrementado
var numero = 5;
console.log(numero);
numero++;
console.log(`Número incrementado: ${numero}.`);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var pesoPorDois = numero / 2; // NaN (Not a Number)
var peso = pesoPorDois + unidade; // '80kg'
console.log(peso);