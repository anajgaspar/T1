import Listagem from "../listagem";
import Pet from "../../classes/pet";

export default class ListagemPets extends Listagem {
    private pets: Array<Pet>
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        this.pets.forEach(pet => {
            console.log(`Nome: ` + pet.nome);
            console.log(`Tipo: ` + pet.tipo);
            console.log(`Raça: ` + pet.raca);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}