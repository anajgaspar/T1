import Cliente from "../../classes/cliente";
import Remover from "../remover";
import Entrada from "../../app/entrada";

export default class ExclusaoCliente extends Remover {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let cpfCliente = this.entrada.receberTexto(`CPF do cliente que deseja excluir: `)
        let clienteEncontrado = false

        for (let i = 0; i < this.clientes.length; i++) {
            if (cpfCliente === this.clientes[i].getCpf.getValor) {
                clienteEncontrado = true
                this.clientes.splice(i, 1)
                console.log('Cliente removido com sucesso :)')
                break;
            }
        }

        if (clienteEncontrado === false) {
            console.log('Cliente não encontrado :(')
        }
    }
}