function exemploPrimeiroMap()
{
    const map1 = new Map();

    map1.set('a', 2);
    map1.set('b', 3);
    map1.set('c', 4);

    console.log(map1.get('a'));
    console.log(map1.get('b'));
    console.log(map1.get('c'));
}

function exemploSegundoMap()
{
    const myMap = new Map();

    myMap.set('apple', 'fruit');
    // Map(1) {"apple" => "fruit"}

    console.log(myMap.get('apple'));
    // fruit

    console.log(myMap);

    console.log(myMap.delete('apple'));
    // true

    console.log(myMap.get('apple'));

    // undefined
}

function exemploTerceiroMap()
{
    const myMap = new Map();

    myMap.set('Nome', 'Nome = Lucas');
    myMap.set('Idade', 27 + " " + 'anos');
    myMap.set('Dev', 'Junior');

    console.log(myMap.get('Nome'));
    console.log(myMap.get('Idade'));
    console.log(myMap.get('Dev'));
}