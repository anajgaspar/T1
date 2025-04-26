import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let cpf = new CPF(valor);
        let cliente = new Cliente(nome, cpf);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}