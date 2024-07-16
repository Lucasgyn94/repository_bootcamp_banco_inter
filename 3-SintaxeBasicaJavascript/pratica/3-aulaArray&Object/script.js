function Array()
{
    // O que são vetores ou array
    let array = ['string', 1, true];
    console.log(array);
}

function ArrayVarios()
{
    // Pode guardar vários tipos de dados
    let arrayVarios = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
    console.log(arrayVarios);
}

function ForEach()
{
    // forEach
    let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
    console.log(array[3]);
    array.forEach(function(item, index)
    {
        console.log(item, index);
    })
}

function PushAdicionaFinal()
{
    let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
    array.push('novo item');
    console.log(array);
}

function PopRemoveFinal()
{
    let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
    array.pop();
    console.log(array);
}

function ShiftRemoveInicio()
{
    let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
    array.shift();
    console.log(array);
}

function UnshiftAdicionaInicio()
{
    let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
    array.unshift();
    console.log(array);
}

function IndexOfRetornaIndice()
{
    let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
    console.log(array.indexOf(true));
}

function SpliceRemoveSubstituiPeloIndice()
{
    let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
    array.splice(0, 3);
    console.log(array);
}

function SliceRetornaParteArray()
{
    let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
    let novoArray = array.slice(0, 3);
    console.log(novoArray);
}

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ["array"],
    objectInterno:{objectInterno: 'objeto Interno'}
};

console.log(object);

// desustrutaração objeto
var string = object.string;
console.log(string);

var array = object.array;
console.log(array)

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);

