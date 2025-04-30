export default class Servico {
    public nome: string
    constructor (nome: string) {
        this.nome = nome
    }

    public get getNome(){
        return this.nome
    }
}