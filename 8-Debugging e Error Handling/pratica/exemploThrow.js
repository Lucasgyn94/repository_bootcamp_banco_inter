function verificarPalindromo(string)
{
    if (!string)
    {
        throw "String Inválida"
    }
    return string === string.split('').reverse().join('');
}

console.log(verificarPalindromo('cat'));