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

  export default botaoConcluir;  // tem o mesmo sentido de proteger o código que a // “IIFE” -( () => { funções })(), ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”, para garantir que usuários não acessem, somente utilizem as regras do negócio.
