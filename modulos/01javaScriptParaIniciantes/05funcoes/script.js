// Crie uma função para verificar se um valor é Truthy
function verificarTruthy(valor){
  if (valor == true)
    console.log("O valor é Truthy");
  else 
    console.log("O valor é Falsy");
}
verificarTruthy(0 === '0');

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function somarPerimetroQuadrado(lado){
  return 4*lado;
}
perimetro = somarPerimetroQuadrado(2);
console.log(`O perímetro do quadrado de lado 2 é ${perimetro}`);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function juntarNomes(nome, sobrenome){
  return nome + " " + sobrenome;
}

console.log(`Meu nome compilado via função resulta em ${juntarNomes('Brenddon Érick', 'Andrade de Oliveira')}`);

// Crie uma função que verifica se um número é par
function verificarParidade(numero){
  if (numero % 2 == 0)
    console.log(`O número ${numero} é par.`);
  else {
    console.log(`O número ${numero} é impar.`);
  }
}

verificarParidade(6);
verificarParidade(7);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificarTipo(dado){
  return typeof dado;
}

console.log(`Verificando o tipo de dado da variavel número 5: ${verificarTipo(5)}`);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', ()=> {
  console.log('Usei o scroll');
})

var totalPaises = 193;
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
  