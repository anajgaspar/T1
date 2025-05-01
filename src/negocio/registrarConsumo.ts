import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Entrada from "../io/entrada";

export default class RegistrarConsumo {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>){
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    
    public registrar(): void {
        console.log(`\nRegistro de consumo:`)
        let cpfCliente = this.entrada.receberTexto(`CPF do cliente: `)
        let cliente = this.clientes.find(cli => cli.getCpf.getValor === cpfCliente)

        let tipo = this.entrada.receberTexto(`Deseja registrar um produto ou um serviço? `)

        switch (tipo){
            case "produto":
                let nomeProduto = this.entrada.receberTexto(`Nome do produto: `)
                let produto = this.produtos.find(prod => prod.nome === nomeProduto)

                if (cliente && produto){
                    cliente?.adicionarProdutosConsumidos(produto)
                    console.log(`Produto registrado para ${cliente.nome} com sucesso :)`)
                } else {
                    console.log(`Cliente ou produto não encontrado`)
                }
            break;
            case "serviço":
                let nomeServico = this.entrada.receberTexto(`Nome do serviço: `)
                let servico = this.servicos.find(serv => serv.nome === nomeServico)

                if (cliente && servico){
                    cliente?.adicionarServicosConsumidos(servico)
                    console.log(`Serviço registrado para ${cliente.nome} com sucesso :)`)
                } else {
                    console.log(`Cliente ou serviço não encontrado`)
                }
            break;
        }
    }
}