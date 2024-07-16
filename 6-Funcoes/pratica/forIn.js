function forInExemplo(obj)
{
    for (prop in obj)
    {
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "Lucas",
    idade: "27",
    cidade: "Goiânia"
}

forInExemplo(meuObjeto);