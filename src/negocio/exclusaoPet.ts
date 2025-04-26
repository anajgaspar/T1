import Pet from "../modelo/pet";
import Exclusao from "./exclusao";
import Entrada from "../io/entrada";

export default class ExclusaoPet extends Exclusao {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>){
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let nomePet = this.entrada.receberTexto(`Por favor informe o nome do pet que deseja excluir: `)
        let petEncontrado = false

        for (let i = 0; i < this.pets.length; i++) {
            if (nomePet === this.pets[i].nome) {
                petEncontrado = true
                this.pets.splice(i, 1)
                console.log('Pet removido com sucesso :)')
                break;
            }
        }

        if (petEncontrado === false) {
            console.log('Pet não encontrado :(')
        }
    }
}