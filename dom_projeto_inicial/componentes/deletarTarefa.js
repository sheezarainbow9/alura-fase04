// botão deletar

const botaoDeletar = () => {
    const botaoDeletar = document.createElement('button');
  
    botaoDeletar.innerText = 'deletar';
    botaoDeletar.addEventListener('click', deletarTarefa);
  
    return botaoDeletar
  
  };
  
  const deletarTarefa = (evento) => {
    const botaoDeletar = evento.target;
    const tarefaCompleta = botaoDeletar.parentElement;
  
    tarefaCompleta.remove(); // vai remover o elemento.
  
    return botaoDeletar;
  };

  export default botaoDeletar; // tem o mesmo sentido de proteger o código que a // “IIFE” -( () => { funções })(), ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”, para garantir que usuários não acessem, somente utilizem as regras do negócio.
