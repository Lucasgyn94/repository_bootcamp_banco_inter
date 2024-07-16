const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Problema resolvido com sucesso!'));
    }, 2000);
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Qual o próximo problema!'));
    }, 2000);
});


