// Listas - loops:

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const acompanhado = true;
let passagemComprada = false;
const destino = "São Paulo";

console.log(` Destinos possíveis: \n`);
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || acompanhado == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
  if (listaDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log("Destino existe.");
