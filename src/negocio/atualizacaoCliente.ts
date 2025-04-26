import Atualizacao from "./atualizacao";
import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";

export default class AtualizacaoCliente extends Atualizacao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let cpfCliente = this.entrada.receberTexto(`Por favor informe o CPF do cliente que deseja atualizar: `)
        let clienteEncontrado = false

        for (let i = 0; i < this.clientes.length; i++) {
            if (cpfCliente === this.clientes[i].getCpf.getValor) {
                clienteEncontrado = true
                let novoNome = this.entrada.receberTexto(`Por favor informe um novo nome para o cliente: `)
                this.clientes[i].nome = novoNome
            }
        }

        if (clienteEncontrado === false) {
            console.log('Cliente não encontrado :(')
        }
    }
}