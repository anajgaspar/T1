import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    private cpf: CPF
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, cpf: CPF) {
        this.nome = nome
        this.cpf = cpf
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public adicionarProdutosConsumidos(produto: Produto): void {
        this.produtosConsumidos.push(produto)
    }
    public adicionarServicosConsumidos(servico: Servico): void {
        this.servicosConsumidos.push(servico)
    }
}