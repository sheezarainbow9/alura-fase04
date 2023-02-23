/* 
Ser autenticável significa ter o método 'autenticar'.
Polimorfismo - jeito de tratar objetos diferentes de modo similar.
Duck Type - o que interessa é o que ele consegue fazer.
*/

export class SistemaAuth {
  static login(autenticavel, senha) {
    if (SistemaAuth.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  // tratando erro de autenticação
  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
