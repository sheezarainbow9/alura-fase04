// Antes de importar, vá no terminal e digite npm init - bytebank -
// descreva do projeto - enter - yes.
// no arquivo json criado: acrescente "type": "module"

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

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
