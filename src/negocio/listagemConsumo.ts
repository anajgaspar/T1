import Cliente from "../modelo/cliente";

export default class ListagemConsumo {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public DezClientesQueMaisConsumiramQuantidade() {
        let dezClientes: { nome: string, quantidade: number }[] = []

        for (let i = 0; i < this.clientes.length; i++) {
            let quantidadeTotal = this.clientes[i].getProdutosConsumidos.length + this.clientes[i].getServicosConsumidos.length

            dezClientes.push({
                nome: this.clientes[i].nome,
                quantidade: quantidadeTotal
            })
        }

        dezClientes.sort((a, b) => b.quantidade - a.quantidade)
        console.log(`\n10 clientes por quantidade de consumo:`)
        dezClientes.slice(0, 10).forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nome}`)
            console.log(`Quantidade: ${cliente.quantidade}`)
            console.log(`--------------------------------------`)
        })
    }
    public ProdutosEServicosMaisConsumidos() {
        let consumoProdutos: { nome: string, quantidade: number }[] = []
        let consumoServicos: { nome: string, quantidade: number }[] = []

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                let item = consumoProdutos.find(p => p.nome === produto.nome)
                if (item) {
                    item.quantidade += 1
                } else {
                    consumoProdutos.push({ nome: produto.nome, quantidade: 1 })
                }
            })
            cliente.getServicosConsumidos.forEach(servico => {
                let item = consumoServicos.find(s => s.nome === servico.nome)
                if (item) {
                    item.quantidade += 1
                } else {
                    consumoServicos.push({ nome: servico.nome, quantidade: 1 })
                }
            })
        })

        consumoProdutos.sort((a, b) => b.quantidade - a.quantidade)
        consumoServicos.sort((a, b) => b.quantidade - a.quantidade)
        console.log(`\nListagem geral dos serviços e produtos mais consumidos:`)
        consumoProdutos.slice(0, 5).forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome}`)
            console.log(`Quantidade: ${produto.quantidade}`)
            console.log(`--------------------------------------`)
        })
        consumoServicos.slice(0, 5).forEach((servico, index) => {
            console.log(`${index + 1}. ${servico.nome}`)
            console.log(`Quantidade: ${servico.quantidade}`)
            console.log(`--------------------------------------`)
        })
    }
    public ProdutosEServicosMaisConsumidosPets() {
        let consumoProdutos: { tipo: string, raca: string, item: string, quantidade: number } [] = []
        let consumoServicos: { tipo: string, raca: string, item: string, quantidade: number } [] = []

        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                cliente.getProdutosConsumidos.forEach(produto => {
                    let item = consumoProdutos.find(p => p.tipo === pet.tipo && p.raca === pet.raca && p.item === produto.nome)
                    if (item) {
                        item.quantidade += 1
                    } else {
                        consumoProdutos.push({
                            tipo: pet.tipo,
                            raca: pet.raca,
                            item: produto.nome,
                            quantidade: 1
                        })
                    }
                })
                cliente.getServicosConsumidos.forEach(servico => {
                    let item = consumoServicos.find(s => s.tipo === pet.tipo && s.raca === pet.raca && s.item === servico.nome)
                    if (item) {
                        item.quantidade += 1
                    } else {
                        consumoServicos.push({
                            tipo: pet.tipo,
                            raca: pet.raca,
                            item: servico.nome,
                            quantidade: 1
                        })
                    }
                }
                )
            })
        })

        consumoProdutos.sort((a, b) => b.quantidade - a.quantidade)
        consumoServicos.sort((a, b) => b.quantidade - a.quantidade)
        console.log(`\nListagem geral dos serviços e produtos mais consumidos por tipo e raça de pets:`)
        consumoProdutos.slice(0, 5).forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.tipo}/${produto.raca}`)
            console.log(`Quantidade: ${produto.quantidade}`)
            console.log(`--------------------------------------`)
        })
        consumoServicos.slice(0, 5).forEach((servico, index) => {
            console.log(`${index + 1}. ${servico.tipo}/${servico.raca}`)
            console.log(`Quantidade: ${servico.quantidade}`)
            console.log(`--------------------------------------`)
        })
    }
    public CincoClientesQueMaisConsumiramValor() {
        let cincoClientes: { nome: string, valor: number }[] = []

        for (let i = 0; i < this.clientes.length; i++) {
            let valorTotal = 0

            for (let p = 0; p < this.clientes[i].getProdutosConsumidos.length; p++) {
                valorTotal += parseFloat(this.clientes[i].getProdutosConsumidos[p].getValor())
            }

            for (let s = 0; s < this.clientes[i].getServicosConsumidos.length; s++) {
                valorTotal += parseFloat(this.clientes[i].getServicosConsumidos[s].getValor())
            }

            cincoClientes.push({
                nome: this.clientes[i].nome,
                valor: valorTotal
            })
        }

        cincoClientes.sort((a, b) => b.valor - a.valor)
        console.log(`\n5 clientes por valor de consumo:`)
        cincoClientes.slice(0, 5).forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nome}`)
            console.log(`Valor: ${cliente.valor.toFixed(2)}`)
            console.log(`--------------------------------------`)
        })
    }
}