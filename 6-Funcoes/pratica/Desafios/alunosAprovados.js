/*
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

*/

const alunos = [
    {
        nome: 'Lucas',
        nota: 10,
        turma: '3C'
    },
    {
        nome: 'Joao',
        nota: 5,
        turma: '1C'
    },
    {
        nome: 'Tampinha',
        nota: 7,
        turma: '2c'
    },
    {
        nome: 'Juca',
        nota: 6,
        turma: '1c'
    },
]

function alunosAprovados(alunos, media)
{
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++)
    {
        // object destructuring
        let { nome, nota } = alunos[i];

        if (nota >= media)
        {
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 7));