function hoisting()
{
    // hoisting
    numberOne = 1;

    console.log(numberOne + 2);

    var numberOne;
}

function variaveisLetVar()
{
    var firstName = 'Lucas';
    var lastName = 'Souza';

    if (firstName === 'Lucas')
    {
        let firstName = 'Tampinha';
        var lastName = 'Silva';
        lastName = 'Ferreira da Silva';

        console.log(lastName);
    }
    console.log(firstName, lastName);
}

function constantes()
{
    FIRST_NAME = 'Lucas';

    console.log(FIRST_NAME);
}
let frase = "Olá, tudo bem?";

console.log(frase.split(" "));
