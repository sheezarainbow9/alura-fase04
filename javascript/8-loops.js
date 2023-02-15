// Listas - loops:

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const acompanhado = false;
let passagemComprada = false;
const destino = "Curitiba";

console.log(` Destinos possíveis: \n`);
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || acompanhado == true;

// let contador = 0;
// let destinoExiste = false;
// while (contador < 3) {
//   if (listaDestinos[contador] == destino) {
//     destinoExiste = true;
//     break;
//   }
//   contador += 1;
// }

// console.log("Destino existe.");

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
  if (listaDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log("Destino existe:", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("Boa viagem!");
} else {
  console.log("Desculpe, tivemos um erro.");
}

// for - (inicialização; condição; incremento)
for (let i = 0; i < 3; i++) {
  if (listaDestinos[i] == destino) {
    destinoExiste = true;
  }
}
