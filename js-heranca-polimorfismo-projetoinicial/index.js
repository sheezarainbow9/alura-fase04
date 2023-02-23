import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAuth } from "./SistemaAuth.js";


const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Ricardo', 5000, 12378945601);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Lais', 78945612379, '456');
const gerenteLogado = SistemaAuth.login(gerente, '123');
const diretorLogado = SistemaAuth.login(diretor, '123456');
const clienteLogado = SistemaAuth.login(cliente, '456');


console.log(gerenteLogado, diretorLogado, clienteLogado);  // true = logou.