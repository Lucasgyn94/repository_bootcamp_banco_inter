function TiposPrimitivos()
{
    // Tipos Primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'lucas';
console.log(typeof(nome));

// funcao
var funcao = function() 
{

};
console.log(typeof(funcao));
}

//======================================================================
function DeclaracaoDeVariaveis()
{
// Declaração de variáveis
var variavel = 'lucas';
variavel = 'tampinha';
console.log(variavel);

console.log();

let variavel2 = 'lucas2';
variavel2 = 'tampinha2';
console.log(variavel2);

console.log();

const variavel3 = 'lucas3';
console.log(variavel3);

}

// =======================================================================

// Escopos Globa e Local
function Escopos()
{
    var escopoGlobal = 'global';
    console.log(escopoGlobal);

    function escopoLocal()
    {
        let escopoLocalInterno = 'local';
        console.log(escopoLocalInterno);
    }
    escopoLocal();
}

//===================================================================
function OperadoresComparacao()
{
    // Atribuição
    var atribuicao = 'lucas';

    // Comparação
    var comparacao = '0' == 0;
    console.log(comparacao);
    // retorna true

    // Comparação identica
    var comparacaoIdentica = '0' === 0;
    console.log(comparacaoIdentica);
    // retorna false pois os tipos são diferentes, um e string e outro e number;
}
//========================================================================
function OperadoresAritmeticos()
{
    // Adição
    var adicao = 1 + 1;
    console.log(adicao);

    // Subtração
    var subtracao = 2 - 1;
    console.log(subtracao);

    // Multiplicação
    var multiplicacao = 2 * 3;
    console.log(multiplicacao);

    // Divisão real
    var divisaoReal = 6 / 2;
    console.log(divisaoReal);

    // Divisao Inteira / Resto da divisão
    var divisaointeira = 5 % 2;
    console.log(divisaointeira);

    // Potenciação
    var potenciacao = 2 ** 10; // 2 elevado a 10
    console.log(potenciacao);
}
//=======================================================================
function OperadoresRelacionais()
{
    // maior que
    var maiorQue = 5 > 2;
    console.log(maiorQue);

    // menor que
    var menorQue = 5 < 2;
    console.log(menorQue);

    // maior ou igual a
    var maiorOuIgual = 5 >= 5;
    console.log(maiorOuIgual);

    // menor ou igual
    var menorOuIgual = 5 <= 2;
    console.log(menorOuIgual);
}
// =================================================================
function OperadoresLogicos()
{
    // Operador e (&&)
    var e = true && true;
    console.log(e);

    // Operador ou (||)
    var ou = false || false;
    console.log(ou);

    // Operador nao(!)
    var nao = !true;
    console.log(nao);
}

OperadoresLogicos();
