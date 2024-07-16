function findMax()
{
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++)
    {
        if(arguments[i] > max)
        {
            max = arguments[i];
        }
    }
    return max;
}

//console.log(findMax(1, 4, 5, 10));

function showArgs()
{
    return arguments;

}

console.log(1, 2, [2, 3, 4], "string");