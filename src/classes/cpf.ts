export default class CPF {
    private valor: string
    constructor(valor: string) {
        this.valor = valor
    }
    public get getValor(): string {
        return this.valor
    }
}