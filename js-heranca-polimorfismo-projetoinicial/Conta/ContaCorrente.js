import { Conta } from "./Conta.js";

// extends - estende a classe Conta para esta.
export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    super(0, cliente, agencia); // referencia o construtor da class Conta.
    ContaCorrente.numeroDeContas += 1;
  }
  // boas práticas para não ter código repetido. sobrescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}
