
function PlacarJogadores()
{
    var jogador1 = 1;
    var jogador2 = 0;
    var placar;


    jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
    console.log('Os jogadores são inválidos');

    if (jogador1 > 0 && jogador2 == 0)
    {
        console.log('Jogador 1 marcou ponto');
    }
    else if (jogador2 > 0 && jogador1 == 0)
    {
        console.log('Jogador 2 marcou ponto');
    }
    else
    {
        console.log('Ninguém marcou ponto');
    }

    switch(placar)
    {
        case placar = jogador1 > jogador2 : 
            console.log('jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1 :
            console.log('Jogador 2 ganhou');
        break;
        default: console.log('Ninguém ganhou');

    }
}

function ExemploFor()
{
    let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
    let object = {
        propriedade1: 'valor1',
        propriedade2: 'valor2',
        propriedade3: 'valor3',
        propriedade4: 'valor4',
        propriedade5: 'valor5'
    }
    // for = Executa uma instrução até que ela seja falsa
    for (let indice = 0; indice < array.length; indice++)
    {
        console.log(indice);
    }
}

function ExemploForIn()
{
    // for/ in executa repetição a partir de uma propriedade
    // com array
    let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
    let object = {
        propriedade1: 'valor1',
        propriedade2: 'valor2',
        propriedade3: 'valor3',
        propriedade4: 'valor4',
        propriedade5: 'valor5'
    }

    for (let i in array)
    {
    console.log(i)
    }

    // com object
    for (i in object) 
    {
    console.log(i);
    }
}

function ExemploForOf()
{
    // for/of = executa repetição a partir de valor
    let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
    let object = {
        propriedade1: 'valor1',
        propriedade2: 'valor2',
        propriedade3: 'valor3',
        propriedade4: 'valor4',
        propriedade5: 'valor5'
    }

    for (i of array)
    {
        console.log(i);
    }
}

function ExemploForOfPropriedade()
{
    // for/of = executa repetição a partir de valor
    let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
    let object = {
        propriedade1: 'valor1',
        propriedade2: 'valor2',
        propriedade3: 'valor3',
        propriedade4: 'valor4',
        propriedade5: 'valor5'
    }

    for (i of object.propriedade1)
    {
    console.log(i);
    }
}

function ExemploWhile()
{
    var a = 0;

    while (a < 10)
    {
        a++;
        console.log(a);
    }
}

function ExemploDoWhile()
{
    var a = 0;

    do {
        a++;
        console.log(a);
    } while(a < 10)
}

ExemploDoWhile();





