// Antes de importar, vá no terminal e digite npm init - bytebank -
// descreva do projeto - enter - yes.
// No arquivo json criado: acrescente "type": "module"

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// aqui chama o constructor criado em Cliente.js
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

// console.log(cliente2.cpf); // retornará somente o cpf atribuído com o get em Cliente.js

contaCorrenteRicardo.depositar(100);
const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
// console.log(conta2.cliente); acessa só o cliente.
// console.log(conta2.saldo); acessa só o saldo.
// console.log(cliente2);
//console.log(contaCorrenteRicardo)
console.log(ContaCorrente.numeroDeContas) // quantas contas tem.
