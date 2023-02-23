/* 
Ser autenticável significa ter o método 'autenticar'.
*/

export class SistemaAuth {
  static login(autenticavel, senha) {
    return autenticavel.autenticar(senha);
  }
}