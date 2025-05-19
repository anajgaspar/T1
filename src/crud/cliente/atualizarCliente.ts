import Atualizar from "../atualizar";
import Cliente from "../../classes/cliente";
import Entrada from "../../app/entrada";

export default class AtualizacaoCliente extends Atualizar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let cpfCliente = this.entrada.receberTexto(`CPF do cliente que deseja atualizar: `)
        let clienteEncontrado = false

        for (let i = 0; i < this.clientes.length; i++) {
            if (cpfCliente === this.clientes[i].getCpf.getValor) {
                clienteEncontrado = true
                let novoNome = this.entrada.receberTexto(`Novo nome para o cliente: `)
                let novoNomeSocial = this.entrada.receberTexto(`Novo nome social para o cliente: `)
                this.clientes[i].nome = novoNome
                this.clientes[i].nomeSocial = novoNomeSocial
            }
        }

        if (clienteEncontrado === false) {
            console.log('Cliente não encontrado :(')
        }
    }
}