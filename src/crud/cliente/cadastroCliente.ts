import Entrada from "../../app/entrada"
import Cliente from "../../classes/cliente"
import CPF from "../../classes/cpf"
import Cadastro from "../cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`)
        let nome = this.entrada.receberTexto(`Nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Nome Social: `)
        let valorCpf = this.entrada.receberTexto(`Número do cpf: `)
        let cpf = new CPF(valorCpf)
        let cliente = new Cliente(nome, nomeSocial, cpf)
        this.clientes.push(cliente)
        console.log(`\nCliente '${nomeSocial}' cadastrado com sucesso :)\n`)
    }
}