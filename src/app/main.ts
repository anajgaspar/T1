import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Cliente from "../modelo/cliente";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import ExclusaoCliente from "../negocio/exclusaoCliente";
import CadastroPet from "../negocio/cadastroPet";
import ListagemPets from "../negocio/listagemPet";
import AtualizacaoPet from "../negocio/atualizacaoPet";
import ExclusaoPet from "../negocio/exclusaoPet";

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
        case 0:
            execucao = false
            console.log(`Até mais!`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}