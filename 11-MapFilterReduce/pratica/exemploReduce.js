const faturamentoAnual = [1500, 1800, 700, 5000, 1600, 18000];

const faturamentoTotal = faturamentoAnual.reduce((total, valorAtual) => {
    return total + valorAtual;
}, 0);

console.log(faturamentoTotal);