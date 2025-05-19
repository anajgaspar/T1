import Entrada from "../../app/entrada";
import Produto from "../../classes/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`)
        let nome = this.entrada.receberTexto(`Nome do produto: `)
        let valor = this.entrada.receberTexto(`Valor do produto: `)
        let produto = new Produto(nome, valor)
        this.produtos.push(produto)
        console.log(`\nProduto '${nome}' cadastrado com sucesso :)\n`)
    }
}