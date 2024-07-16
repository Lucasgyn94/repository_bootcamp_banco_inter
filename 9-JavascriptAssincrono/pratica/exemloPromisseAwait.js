async function resolvePromise()
{
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolvido ');
        }, 3000);
    })

    const resolved = await myPromise
        .then((result) => console.log(result + 'passando por aqui'))
        .then((result) => result + 'E agora acabou')
        .catch((err) => console.log(err.message));
    return resolved;
}

resolvePromise();