async function resolvePromise()
{
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolvido ');
        }, 3000);
    });

    let result;

    try
    {
        result = await myPromise
            .then((result) => result + 'passando pelo then')
            .then((result) => result + 'agora acabou')
    }
    catch (err)
    {
        result = err.message;
    }
    return result;
}