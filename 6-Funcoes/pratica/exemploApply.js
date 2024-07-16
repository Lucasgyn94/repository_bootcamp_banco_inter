function exemploPrimeiroApply()
{
    const pessoa = {
        nome: 'lucas',
    };
    
    const animal = {
        nome: 'tampinha',
    };
    
    function getSomething()
    {
        console.log(this.nome);
    }
    
    getSomething.apply(pessoa);
    getSomething.apply(animal);
}

function exemploSegundoApply()
{
    const myObj = {
        num1: 2,
        num2: 4,
    };
    
    function soma(a, b)
    {
        console.log(this.num1 + this.num2 + a + b);
    }
    
    soma.apply(myObj, [5, 1]);
}

