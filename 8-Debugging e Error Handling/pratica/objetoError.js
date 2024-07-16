function exemploPrimeiroError()
{
    const meuErro = new Error('Mensagem inválida');
    throw meuErro;
    // mensagem inválida
}

function exemploSegundoError()
{
    const meuErro = new Error('Mensagem inválida');
    meuErro.name = 'InvalidMessage';

    throw meuErro;
}

const NovoErro = new Error();

NovoErro.name = "Novo Erro";
NovoErro.message = "Este erro nunca ocorreu"

console.log(NovoErro);