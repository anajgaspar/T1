import Listagem from "../listagem";
import Produto from "../../classes/produto";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`)
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome)
            console.log(`--------------------------------------`)
        });
        console.log(`\n`)
    }
}