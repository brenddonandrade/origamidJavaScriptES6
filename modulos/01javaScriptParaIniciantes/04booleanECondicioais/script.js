// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade = 25;
var idadePai = 44;

if (idade < idadePai){
    console.log('É menor.');
    
} else if (idade == idadePai){
    console.log('É igual.');
} else {
    console.log('É maior.');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(`Eu acredito que o retorno seja 3. Retorno: ${expressao}`);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
console.log(`Nome: ${!!nome}`);
var idade = 28;
console.log(`Idade: ${!!idade}`);
var possuiDoutorado = false;
console.log(`possuiDoutorado: ${!!possuiDoutorado}`);
var empregoFuturo;
console.log(`empregoFuturo: ${!!empregoFuturo}`);
var dinheiroNaConta = 0;
console.log(`dinheiroNaConta: ${!!dinheiroNaConta}`);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil>china){
    console.log("A população do Brasil é maior.");
} else if(brasil == china){
    console.log("A população tem o mesmo número de habitantes.");
} else {
    console.log("A população da China é maior.");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}