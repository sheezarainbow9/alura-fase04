// Listas - condicionais e operadores lógicos:

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const acompanhado = true;
const passagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade.");
//   listaDestinos.splice(1, 1);
// } else if (acompanhado == true) {
//   console.log("Comprador está acompanhado.");
//   listaDestinos.splice(1, 1);
// } else {
//   console.log("Não é maior de idade e não posso vender.");
// };

// console.log(listaDestinos);

if (idadeComprador >= 18 || acompanhado == true) {
      console.log("Boa viagem!");
      listaDestinos.splice(1, 1);
    } else {
      console.log("Não é maior de idade e não posso vender.");
    };

    console.log('Embarque: \n');
    if (idadeComprador >= 18 && passagemComprada) {
        console.log("Boa viagem!");
    } else {
        console.log("Não pode embarcar.");
    }

    console.log(listaDestinos);
    
