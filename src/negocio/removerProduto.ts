import Produto from "../modelo/produto";
import Remover from "./remover";
import Entrada from "../io/entrada";

export default class ExclusaoProduto extends Remover {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let nomeProduto = this.entrada.receberTexto(`Produto que deseja excluir: `)
        let produtoEncontrado = false

        for (let i = 0; i < this.produtos.length; i++) {
            if (nomeProduto === this.produtos[i].nome) {
                produtoEncontrado = true
                this.produtos.splice(i, 1)
                console.log('Produto removido com sucesso :)')
                break;
            }
        }

        if (produtoEncontrado === false) {
            console.log('Produto não encontrado :(')
        }
    }
}