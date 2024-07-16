function exemploCallPrimeiro()
{
    const pessoa = {
        nome: 'Lucas',
    };
    
    const animal = {
        nome: 'Tampinha',
    };
    
    function getSomething()
    {
        console.log(this.nome);
    }
    
    getSomething.call(pessoa);
    // Lucas
    getSomething.call(animal);
    // Tampinha    
}

//====================================================================

function callComParametros()
{
    const myObj = {
        num1: 2,
        num2: 4,
    };
    
    function soma(a, b)
    {
        console.log(this.num1 + this.num2 + a + b);
    }
    
    soma.call(myObj, 5, 1);    
}

callComParametros();
























