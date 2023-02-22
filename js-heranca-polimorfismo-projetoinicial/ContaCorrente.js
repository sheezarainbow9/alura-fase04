import { Conta } from "./Conta.js";

// extends - estende a classe Conta para esta.
export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    super(0, cliente, agencia); // referencia o construtor da class /conta.
    ContaCorrente.numeroDeContas += 1;
  }
}
