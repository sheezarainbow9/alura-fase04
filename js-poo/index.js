class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  _saldo = 0; // _ - significa que é algo privado. boa prática.
  // proposta que está sendo feita para uma sintaxe de campos privados dentro do JS: https://github.com/tc39/proposal-class-fields#private-fields

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) { // early return, deixa o código com melhor legibilidade.
      return;
    }
    this._saldo += valor;
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(500);

const valorSacado = contaCorrenteRicardo.sacar(150);
console.log(valorSacado);


console.log(contaCorrenteRicardo);
