function tipoDeFuncoes()
{
    // Funções anônimas
    (
        function()
        {
            let name = "Digital Innovation One"
            return console.log(name);
        }
    )();
    
    (
        function(a, b)
        {
            return console.log(a + b);
        }
    )(1, 4);
    
    const soma3 = (
        function(a, b)
        {
            return console.log(a + b);
        }
    )(5, 5);    

}

function callBacks()
{
    const calc = function(operacao, num1, num2)
    {
        return operacao(num1, num2);
    }

    const soma = function(num1, num2)
    {
        return num1 + num2;
    }

    const sub = function(num1, num2)
    {
        return num1 - num2;
    }
    
    resultSoma = calc(soma, 1, 3);
    resultSub = calc(sub, 3, 2);

    console.log(resultSoma);
    console.log(resultSub);
}

