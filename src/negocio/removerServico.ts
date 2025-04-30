import Servico from "../modelo/servico";
import Remover from "./remover";
import Entrada from "../io/entrada";

export default class ExclusaoServico extends Remover {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let nomeServico = this.entrada.receberTexto(`Nome do serviço que deseja excluir: `)
        let servicoEncontrado = false

        for (let i = 0; i < this.servicos.length; i++) {
            if (nomeServico === this.servicos[i].nome) {
                servicoEncontrado = true
                this.servicos.splice(i, 1)
                console.log('Serviço removido com sucesso :)')
                break;
            }
        }

        if (servicoEncontrado === false) {
            console.log('Serviço não encontrado :(')
        }
    }
}