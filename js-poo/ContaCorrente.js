import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;
  // referenciar o cliente que foi privado, atribuindo o valor correto:
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  // acessar só o cliente:
  get cliente() {
    return this._cliente;
  }

  _saldo = 0; // _ - significa que é algo privado. boa prática.
  // proposta que está sendo feita para uma sintaxe de campos privados dentro do JS: https://github.com/tc39/proposal-class-fields#private-fields

  get saldo() {
    return this._saldo;
  }


  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      // early return, deixa o código com melhor legibilidade.
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
