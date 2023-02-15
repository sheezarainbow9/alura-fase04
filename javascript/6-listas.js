// Listas - criando, adicionando, exibindo e removendo:

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDestinos.push(`Curitiba`); // adiciona item na lista.

console.log(`Destinos possíveis:`);
console.log(listaDestinos);

listaDestinos.splice(1, 1); // remove item da lista (posição, quantidade de elementos);
console.log(listaDestinos);
console.log(listaDestinos[1]); // exibe o item escolhido da lista.
