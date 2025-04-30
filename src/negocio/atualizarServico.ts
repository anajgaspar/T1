import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Atualizar from "./atualizar";

export default class AtualizacaoServico extends Atualizar {
    private entrada: Entrada
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.entrada = new Entrada
        this.servicos = servicos
    }
    public atualizar(): void {
        let nomeServico = this.entrada.receberTexto(`Nome do serviço que deseja atualizar: `)
        let servicoEncontrado = false

        for (let i = 0; i < this.servicos.length; i++) {
            if (nomeServico === this.servicos[i].nome) {
                servicoEncontrado = true
                let novoNome = this.entrada.receberTexto(`Novo nome: `)
                this.servicos[i].nome = novoNome
            }
        }
    }
}