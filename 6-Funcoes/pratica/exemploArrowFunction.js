
const exemploPrimeiroArrowFunction = () => {
    const helloWorld = () =>
    {
        return "Olá mundo, yo sou lucas";
    }
    console.log(helloWorld());
}

const exemploSegundoArrowFunction = () =>
{
    const helloWorld = () => "Ola mundo, yo soy lucas";

    console.log(helloWorld());
}

const exemploTerceiroArrowfunction = () =>
{
    // Sintaxe
    const soma = (a, b) => a + b;

    console.log(soma(4, 6));
    // saida: 10;
}

const exemploQuartoArrowFunction = () =>
{
    const soma = (a) => a;
    console.log(soma(5));
}




