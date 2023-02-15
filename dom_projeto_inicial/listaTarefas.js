const criarTarefa = (evento) => {
  evento.preventDefault(); // previne o formulário de enviar os dados, parando o refresh na página.

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const tarefa = document.createElement("li");
  tarefa.classList.add("task"); // adicionará a classe task existente no css para visualizarmos a lista de items.
  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.innerHTML = conteudo;

  lista.appendChild(tarefa); // anexa elemento dentro do outro (data-list vai receber a li criada).
  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);
