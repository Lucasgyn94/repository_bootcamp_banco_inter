function numeroPositivo(num)
{
    let resultado;

    if(resultado < 0)
    {
        resultado = false;
    }
    else
    {
        resultado = true;
    }
    return resultado;
}

//console.log(numeroPositivo(2));

function numeroPositivo2(num)
{
    let resultado;

    const ehNegativo = num < 0;

    if(ehNegativo)
    {
        resultado = false
    }
    else
    {
        resultado = true;
    }
    return resultado
}

function numeroPositivo3(num)
{
    const ehNegativo = num < 0;

    if(ehNegativo)
    {
        return false;
    }
    return true;
}

