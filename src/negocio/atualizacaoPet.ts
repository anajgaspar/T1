import Atualizacao from "./atualizacao";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada";

export default class AtualizacaoPet extends Atualizacao {
    private entrada: Entrada
    private pets: Array<Pet>
    constructor(pets: Array<Pet>) {
        super()
        this.entrada = new Entrada()
        this.pets = pets
    }
    public atualizar(): void {
        let nomePet = this.entrada.receberTexto(`Por favor informe o nome do pet que deseja atualizar: `)
        let petEncontrado = false

        for (let i = 0; i < this.pets.length; i++) {
            if (nomePet === this.pets[i].nome) {
                petEncontrado = true
                let novoNome = this.entrada.receberTexto(`Por favor informe um novo nome para o pet: `)
                let novoTipo = this.entrada.receberTexto(`Por favor informe um novo tipo para o pet: `)
                let novoGenero = this.entrada.receberTexto(`Por favor informe um novo gênero para o pet: `)
                let novaRaca = this.entrada.receberTexto(`Por favor informe uma nova raça para o pet: `)
                this.pets[i].nome = novoNome
                this.pets[i].tipo = novoTipo
                this.pets[i].genero = novoGenero
                this.pets[i].raca = novaRaca
            }
        }

        if (petEncontrado === false) {
            console.log('Pet não encontrado :(')
        }
    }
}