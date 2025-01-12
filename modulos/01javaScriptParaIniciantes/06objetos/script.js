// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
pessoa = {
    nome: 'Brenddon Érick',
    sobreome: ' Andrade de Oliveira',
    nomeCompleto: function () {
        return this.nome + this.sobrenome;
    },
}

// Crie um método no objeto anterior, que mostre o seu nome completo


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
console.log(carro.preco);
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idadeAnos: 10,
    latir(temHumano) {
        if (temHumano) {
            console.log('Latindo para o humano.')
        } else
            console.log(`${this} não está latindo`);
    }
}

cachorro.latir(false);

