import Cadastro from "../cadastro";
import Pet from "../../classes/pet";
import Cliente from "../../classes/cliente";
import Entrada from "../../app/entrada";

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private pets: Array<Pet>
    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.pets = pets
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`)
        let nomeDono = this.entrada.receberTexto(`Dono do pet: `)

        let nomePet = this.entrada.receberTexto(`Nome do pet: `)
        let raca = this.entrada.receberTexto(`Raça: `)
        let genero = this.entrada.receberTexto(`Gênero: `)
        let tipo = this.entrada.receberTexto(`Tipo do pet: `)

        let pet = new Pet(nomePet, raca, genero, tipo)
        this.pets.push(pet)

        let dono = this.clientes.find(cliente => cliente.nome === nomeDono)

        if (dono) {
            dono.getPets.push(pet)
            console.log('Pet cadastrado com sucesso para o cliente :)')
        } else {
            console.log('Cliente não encontrado :(')
        }
    }
}