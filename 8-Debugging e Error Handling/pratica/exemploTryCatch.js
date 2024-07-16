function verificaPalindromo(string)
{
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string)
{
    try
    {
        verificaPalindromo(string);
    }
    catch (e)
    {
        throw e; // console.log(e);
    }
}

console.log(tryCatchExemplo(''));