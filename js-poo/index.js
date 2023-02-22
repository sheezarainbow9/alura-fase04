// Antes de importar, vá no terminal e digite npm init - bytebank -
// descreva do projeto - enter - yes.
// No arquivo json criado: acrescente "type": "module"

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 1002;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
console.log(conta2.cliente); // acessa só o cliente.
console.log(conta2.saldo); // acessa só o saldo.

