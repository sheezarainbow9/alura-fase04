// “IIFE” -( () => { funções })(), ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”, para garantir que usuários não acessem, somente utilizem as regras do negócio.

(() => {
  const criarTarefa = (evento) => {
    evento.preventDefault(); // previne o formulário de enviar os dados, parando o refresh na página.

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

    const tarefa = document.createElement("li");
    tarefa.classList.add("task"); // adicionará a classe task existente no css para visualizarmos a lista de items.
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(botaoConcluir());
    lista.appendChild(tarefa); // anexa elemento dentro do outro (data-list vai receber a li criada).
    input.value = "";
  };

  const novaTarefa = document.querySelector("[data-form-button]");

  novaTarefa.addEventListener("click", criarTarefa);

  // botão concluir

  const botaoConcluir = () => {
    const botaoConcluir = document.createElement("button");

    botaoConcluir.classList.add("check-button");
    botaoConcluir.innerText = "concluir";

    botaoConcluir.addEventListener("click", concluirTarefa);

    return botaoConcluir;
  };

  const concluirTarefa = (evento) => {
    const botaoConcluir = evento.target;

    const tarefaCompleta = botaoConcluir.parentElement; // pega o pai do elemento (botão), que no caso é o 'li'.

    tarefaCompleta.classList.toggle("done"); // vai passar o elemento css('done') responsável pela tarefa de rabiscar item na lista.
  };
})();
