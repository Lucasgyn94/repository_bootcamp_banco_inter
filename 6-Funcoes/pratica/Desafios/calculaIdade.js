/*
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

*/

function calculaIdadeComApply()
{
    function calculaIdade(anos) {
        return `Daqui a ${anos} anos, ${this.nome} terá ${
            this.idade + anos
        } anos de idade.`;
    }
    
    const pessoa1 = {
        nome: 'lucas',
        idade: 27
    };
    
    const pessoa2 = {
        nome: 'joao',
        idade: 27,
    }
    
    const animal = {
        nome: 'tampinha',
        idade: 3
    };
    console.log(calculaIdade.apply(pessoa1, [3]));
}

function calculaIdadeComCall()
{
    function calculaIdade(anos) {
        return `Daqui a ${anos} anos, ${this.nome} terá ${
            this.idade + anos
        } anos de idade.`;
    }

    const pessoa1 = {
        nome: 'Lucas',
        idade: 27
    };

    const animal = {
        nome: 'Tampinha',
        idade: 5,
        raça: 'pitbull'
    };

    const pessoa3 = {
        nome: 'Joao',
        idade: 27
    };

    console.log(calculaIdade.call(pessoa1, 3));
}

