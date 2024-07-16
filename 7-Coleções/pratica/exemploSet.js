function exemploPrimeiroSet()
{
    const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

    const mySet = new Set(myArray);

}

function exemploSegundoSet()
{
    const mySet = new Set();

    mySet.add(1);
    mySet.add(3);
    mySet.add(5);

    console.log(mySet.has(1));
    // true

    mySet.delete(3);
    // apaga o número 3 deixando mySet com 1 e 5

    console.log(mySet);
}