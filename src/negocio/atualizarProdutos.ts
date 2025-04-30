import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Atualizar from "./atualizar";

export default class AtualizacaoProduto extends Atualizar {
    private entrada: Entrada
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.entrada = new Entrada
        this.produtos = produtos
    }
    public atualizar(): void {
        let nomeProduto = this.entrada.receberTexto(`Nome do produto que deseja atualizar: `)
        let produtoEncontrado = false

        for (let i = 0; i < this.produtos.length; i++) {
            if (nomeProduto === this.produtos[i].nome) {
                produtoEncontrado = true
                let novoNome = this.entrada.receberTexto(`Novo nome: `)
                this.produtos[i].nome = novoNome
            }
        }
    }
}