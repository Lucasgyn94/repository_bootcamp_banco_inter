function verificaPalindromoFinally(string)
{
    if(!string) throw "String inválida";
    return string === string.split('').reverse().join('');
}

function tryCatchExemploFinally(string)
{
    try 
    {
        verificaPalindromoFinally(string);
    }
    catch (e)
    {
        throw e;
    }
    finally
    {
        console.log(`A string lançada foi ${string}`);
    }
}

tryCatchExemploFinally('cat');