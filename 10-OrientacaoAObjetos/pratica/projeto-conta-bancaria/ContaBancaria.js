class ContaBancaria {
    constructor(cliente, agencia, conta, tipo)
    {
        this.cliente = cliente;
        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this._saldo = 0;
    }

    sacar(valor)
    {
        if (valor > this._saldo)
        {
            console.log('Operação negada, saldo insuficiente!');
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor)
    {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    set saldo(valor)
    {
        this._saldo = valor;
    }

    get saldo()
    {
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(cliente, agencia, conta, cartaoCredito)
    {
        super(cliente, agencia, conta);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor)
    {
        this._cartaoCredito = valor;
    }

    get cartaoCredito()
    {
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria
{
    constructor(agencia, conta)
    {
        super(agencia, conta);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria
{
    constructor(agencia, conta)
    {
        super(agencia, conta);
        this.tipo = 'universitária';
    }

    sacar(valor)
    {
        if (valor > 500)
        {
            return 'Operação negada'
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

const minhaConta = new ContaCorrente('lucas', 1, 2556, true);

console.log(minhaConta);