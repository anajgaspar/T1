import Entrada from "./entrada";
import Empresa from "../classes/empresa";
import CadastroCliente from "../crud/cliente/cadastroCliente";
import ListagemClientes from "../crud/cliente/listagemClientes";
import AtualizacaoCliente from "../crud/cliente/atualizarCliente";
import ExclusaoCliente from "../crud/cliente/removerCliente";
import CadastroPet from "../crud/pet/cadastroPet";
import ListagemPets from "../crud/pet/listagemPets";
import AtualizacaoPet from "../crud/pet/atualizarPet";
import ExclusaoPet from "../crud/pet/removerPet";
import CadastroProduto from "../crud/produto/cadastroProduto";
import ListagemProdutos from "../crud/produto/listagemProdutos";
import AtualizacaoProduto from "../crud/produto/atualizarProdutos";
import ExclusaoProduto from "../crud/produto/removerProduto";
import CadastroServico from "../crud/servico/cadastroServico";
import ListagemServicos from "../crud/servico/listagemServicos";
import AtualizacaoServico from "../crud/servico/atualizarServico";
import ExclusaoServico from "../crud/servico/removerServico";
import RegistrarConsumo from "../crud/registrarConsumo";
import ListagemConsumo from "../crud/listagemConsumo";

console.log(`Seja bem-vindo(a) ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias!`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Excluir cliente`);
    console.log(`5 - Cadastrar pet`);
    console.log(`6 - Listar todos os pets`);
    console.log(`7 - Atualizar pet`);
    console.log(`8 - Excluir pet`);
    console.log(`9 - Cadastrar produto`);
    console.log(`10 - Listar todos os produtos`);
    console.log(`11 - Atualizar produto`);
    console.log(`12 - Excluir produto`);
    console.log(`13 - Cadastrar serviço`);
    console.log(`14 - Listar todos os serviços`);
    console.log(`15 - Atualizar serviço`);
    console.log(`16 - Excluir serviço`);
    console.log(`17 - Registrar consumo`);
    console.log(`18 - Listar os 10 clientes que mais consumiram produtos ou serviços (quantidade)`);
    console.log(`19 - Listar os 5 clientes que mais consumiram produtos ou serviços (valor)`);
    console.log(`20 - Listar os serviços ou produtos mais consumidos (geral)`);
    console.log(`21 - Listar os serviços ou produtos mais consumidos por tipo e raça de pets`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemCliente = new ListagemClientes(empresa.getClientes)
            listagemCliente.listar()
            break;
        case 3:
            let atualizacaoCliente = new AtualizacaoCliente(empresa.getClientes)
            atualizacaoCliente.atualizar()
            break;
        case 4:
            let exclusaoCliente = new ExclusaoCliente(empresa.getClientes)
            exclusaoCliente.excluir()
            break;
        case 5:
            let cadastroPet = new CadastroPet(empresa.getClientes, empresa.getPets)
            cadastroPet.cadastrar()
            break;
        case 6:
            let listagemPet = new ListagemPets(empresa.getPets)
            listagemPet.listar()
            break;
        case 7:
            let atualizacaoPet = new AtualizacaoPet(empresa.getPets)
            atualizacaoPet.atualizar()
            break;
        case 8:
            let exclusaoPet = new ExclusaoPet(empresa.getPets)
            exclusaoPet.excluir()
            break;
        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 10:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 11:
            let atualizacaoProduto = new AtualizacaoProduto(empresa.getProdutos)
            atualizacaoProduto.atualizar()
            break;
        case 12:
            let exclusaoProduto = new ExclusaoProduto(empresa.getProdutos)
            exclusaoProduto.excluir()
            break;
        case 13:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 14:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 15:
            let atualizacaoServico = new AtualizacaoServico(empresa.getServicos)
            atualizacaoServico.atualizar()
            break;
        case 16:
            let exclusaoServico = new ExclusaoServico(empresa.getServicos)
            exclusaoServico.excluir()
            break;
        case 17:
            let registrarConsumo = new RegistrarConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            registrarConsumo.registrar()
            break;
        case 18:
            let dezClientes = new ListagemConsumo(empresa.getClientes)
            dezClientes.DezClientesQueMaisConsumiramQuantidade()
            break;
        case 19:
            let cincoClientes = new ListagemConsumo(empresa.getClientes)
            cincoClientes.CincoClientesQueMaisConsumiramValor()
            break;
        case 20:
            let produtosEServicos = new ListagemConsumo(empresa.getClientes)
            produtosEServicos.ProdutosEServicosMaisConsumidos()
            break;
        case 21:
            let produtosEServicosPets = new ListagemConsumo(empresa.getClientes)
            produtosEServicosPets.ProdutosEServicosMaisConsumidosPets()
            break;
        case 0:
            execucao = false
            console.log(`Até mais!`)
            break;
        default:
            console.log(`Opção não entendida :(`)
    }
}