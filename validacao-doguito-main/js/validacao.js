export function valida(input) {
  const tipoInput = input.dataset.tipo;

  if (validadores[tipoInput]) {
    validadores[tipoInput](input);
  }

  const validadores = {
    dataNascimento: (input) => validaDataNascimento(input),
    cpf: (input) => validaCPF(input),
  };

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      mostraMsgErro(input, tipoInput);
  }
}

const tiposErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensagemErro = {
  nome: {
    valueMissing: "O campo nome não pode estar vazio.",
  },
  email: {
    valueMissing: "O campo email não pode estar vazio.",
    typeMismatch: "O email digitado não é válido.",
  },
  senha: {
    valueMissing: "O campo senha não pode estar vazio.",
    typeMismatch:
      "A senha deve conter entre 6 e 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.",
  },
  dataNascimento: {
    valueMissing: "O campo data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior de 18 anos para se cadastrar.",
  },
  cpf: {
    valueMissing: "O campo CPF não pode estar vazio.",
    customError: "O CPF digitado não é válido.",
  },
};

function mostraMsgErro(tipoInput, input) {
  let mensagem = "";
  tiposErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagemErro[tipoInput][erro];
    }
  });

  return mensagem;
}

function validaDataNascimento(input) {
  const dataRecebida = new Date(input.value);
  let mensagem = "";

  // ! - para ser falsa a condição.
  if (!maiorQue18(dataRecebida)) {
    mensagem = "Você deve ser maior de 18 anos para se cadastrar.";
  }

  input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataMais18 <= dataAtual;
}

function validaCPF(input) {
  const cpfFormatado = input.value.replace(/\D/g, "");
  let mensagem = "";

  if (!checaCPFRepetido(cpfFormatado)) {
    mensagem = "O CPF digitado não é válido.";
  }

  input.setCustomValidity(mensagem);
}

function checaCPFRepetido(cpf) {
  const valoresRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  let cpfValido = true;

  valoresRepetidos.forEach(valor => {
    if (valor == cpf) {
      cpfValido = false;
    }
  });

  return cpfValido;
}
