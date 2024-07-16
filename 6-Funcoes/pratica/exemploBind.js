const retornaNomes = function()
{
    return this.nome;
};
let lucas = retornaNomes.bind({nome: 'Lucas e Tampinha'});

console.log(lucas());