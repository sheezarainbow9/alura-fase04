// Atribuição de variáveis:

//const idade = 29;
//let nome = "Ricardo";
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

// concatenação.
console.log(primeiroNome, sobrenome);
console.log(primeiroNome + " " + sobrenome);

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); // interpolação.

// só sobrescrever se for 'let' na variável de mesmo nome. 'const' não deixa mudar.
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando variável.
idade = 26; //atribuindo valor.
idade = idade + 1;
console.log(idade);
