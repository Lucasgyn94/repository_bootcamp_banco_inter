// solução 1

function verificarPalindromo(string)
{
    if(!string)
    {
        return "string inexistente";
    }
    else
    {
        return string.split("").reverse().join("") === string;
    }
}

// solução 2
function verificaPalindromo2(string)
{
    if(!string)
    {
        return "string inexistente";
    }
    else
    {
        for (let i = 0; i <string.length / 2; i++)
        {
            if(string[i] !== string[string.length - 1 - i])
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}

console.log(verificaPalindromo2("gato"));